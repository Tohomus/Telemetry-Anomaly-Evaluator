from fastapi import FastAPI
from backend.simulator.anomaly_simulator import TelemetrySimulator
from backend.anomaly_engine.mahalnobis_engine import MahalanobisDistanceDetector
from backend.ml_engine.anomaly_classifier import AnomalyClassifier
from backend.rag.rag_assistant import RagAssistant
from backend.config import ALERTS_FILE, DATA_FILE
from backend.rag.json_loader import JSONLoader
from fastapi import HTTPException
import json
from pathlib import Path
import pandas as pd
from pydantic import BaseModel

app = FastAPI(
    title = "Telemetry Anomaly Evaluator",
    version = "1.0"
)



class Telemetry(BaseModel):
    battery_voltage: float
    temperature: float
    current_draw: float
    power: float


class Alert(BaseModel):
    timestamp: str
    anomaly_detected: bool
    predicted_anomaly_type: str
    confidence: float
    telemetry: Telemetry


class AlertRequest(BaseModel):
    alert: Alert


@app.get("/")
def home():
    return{
        "status": "running",
        "message": "Telemetry Backend is working!"
    }

@app.post("/generate-data")
def generate_data():

    simulator = TelemetrySimulator()

    telemetry_df = simulator.generate_data()

    simulator.export_to_csv(
        telemetry_df,
        DATA_FILE
    )

    return {
        "message": "Telemetry dataset generated successfully.",
        "rows_generated": len(telemetry_df)
    }

@app.post("/detect-anomalies")
def detect_anomalies():
    
    telemetry_df = pd.read_csv(DATA_FILE)
    detector = MahalanobisDistanceDetector(telemetry_df)
    result_df = detector.run()
    result_df.to_csv(
        DATA_FILE,
        index=False
    )
    total_anomalies = int(result_df["Is_Anomaly"].sum())

    return {
        "message": "Anomaly detection completed.",
        "total_records": len(result_df),
        "anomalies_detected": total_anomalies
    }

@app.post("/classify-anomalies")
def classify_anomalies():

    telemetry_df = pd.read_csv(DATA_FILE)

    classifier = AnomalyClassifier(telemetry_df)

    alerts = classifier.run()

    return {
        "message": "Classification completed.",
        "alerts_generated": len(alerts)
    }

@app.get("/alerts")
def get_alerts():

    try:
        with open(ALERTS_FILE, "r") as file:
            alerts = json.load(file)

        return alerts

    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail="alerts.json not found. Run classification first."
        )
    
@app.post("/ask-rag")
def ask_rag(request: AlertRequest):

    assistant = RagAssistant()

    response = assistant.process_alert(
        request.alert.model_dump()
    )

    return {
        "response": response
    }