from rag.rag_assistant import (RagAssistant)

#this is just a mock data, later we will include actual data#
sample_alert = {

  "timestamp": "2026-06-22 12:00:00",

  "anomaly_detected": True,

  "predicted_anomaly_type": "Current Surge",

  "confidence": 0.98,

  "telemetry": {"battery_voltage": 23.5,
                "temperature": 36.2,
                "current_draw": 8.7}

}

assistant = RagAssistant()

prompt = assistant.process_alert(sample_alert)

print(prompt)

#Run this script to verify that data flows correctly from the raw alert dictionary all the way
# to the final structured LLM Prompt.#