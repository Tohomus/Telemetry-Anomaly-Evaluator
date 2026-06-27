from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import (
    classification_report,
    confusion_matrix
)
import numpy as np
import pandas as pd
import json

class AnomalyClassifier:
    def __init__(self,telemetry_df):
        self.telemetry_df = telemetry_df
        self.model = RandomForestClassifier(
            n_estimators=200,
            max_depth=12,
            min_samples_leaf=3,
            random_state=42
        )
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None

    def train(self):

      # Extracting features needed for training
        X = self.telemetry_df[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
            ]
        ]
        y = self.telemetry_df["Anomaly_Type"]

        self.X_train,self.X_test,self.y_train,self.y_test = train_test_split(
            X, y, test_size = 0.2, random_state = 42, stratify = y
        )

        self.model.fit(self.X_train,self.y_train)

    def evaluate(self):
        y_pred = self.model.predict(self.X_test)

        # We are going to evaluate our model
        print("\nModel Evaluation:")
        print("\nClassification Report:\n")
        print(
            classification_report(
                self.y_test,
                y_pred,
                zero_division=0
            )
        )

        print("\nConfusion Matrix:\n")

        print(
            confusion_matrix(
                self.y_test,
                y_pred
            )
        )

        train_acc = self.model.score(self.X_train, self.y_train)
        test_acc = self.model.score(self.X_test, self.y_test)

        print("Train:", train_acc)
        print("Test :", test_acc)

    def cross_validate(self):

      # Instead of evaluating the model on just one train/test split,
      # it trains and tests the model five different times using different subsets of the data.

       X = self.telemetry_df[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
            ]
        ]
       y = self.telemetry_df["Anomaly_Type"]

       scores = cross_val_score(
           self.model,
           X,
           y,
           cv=5,
           scoring="f1_macro"
       )

       print("\nCross-Validation Scores:")
       for i, score in enumerate(scores, start=1):
            print(f"Fold {i}: {score:.4f}")

       print("\nMean F1 Score :", round(scores.mean(), 4))
       print("Std Deviation :", round(scores.std(), 4))

    def feature_importance(self):

        # To see importance of each features
        importance = pd.DataFrame({

            "Feature": self.X_train.columns,

            "Importance": self.model.feature_importances_

        })

        importance = importance.sort_values(
            by="Importance",
            ascending=False
        )
        print("\nFeature Importance")
        print(importance.to_string(index=False))

# generate a new telemetry dataset and test the trained model on it.

    def evaluate_new_dataset(self,new_df):
      X_new = new_df[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
            ]
        ]
      y_new = new_df[
            "Anomaly_Type"
        ]

      predictions = self.model.predict(X_new)
      print("\nEvaluation on new dataset:")
      print(classification_report(y_new, predictions, zero_division=0))
      print("Accuracy :",round(self.model.score(X_new,y_new),4))



    def generate_json_alerts(self):

        anomaly_rows = self.telemetry_df[
            self.telemetry_df["Is_Anomaly"] == 1
        ]
        alerts = []

        for _, row in anomaly_rows.iterrows():

            features = pd.DataFrame(
                [[
                    row["Battery_Voltage_V"],
                    row["Temperature_C"],
                    row["Current_Draw_A"],
                    row["Power_W"]
                ]],
            columns=[
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
                    ]
            )

            prediction = self.model.predict(
                features
            )[0]

            confidence = max(
                self.model.predict_proba(
                    features
                )[0]
            )

            alert = {
                "timestamp":
                    str(row["Timestamp"]),

                "anomaly_detected":
                    True,

                "predicted_anomaly_type":
                    prediction,

                "confidence":
                    round(
                        float(confidence),
                        4
                    ),

                "telemetry": {
                    "battery_voltage":
                        float(
                            row["Battery_Voltage_V"]
                        ),

                    "temperature":
                        float(
                            row["Temperature_C"]
                        ),

                    "current_draw":
                        float(
                            row["Current_Draw_A"]
                        ),
                    "Power" :
                        float(
                            row["Power_W"]
                        )
                }
            }

            alerts.append(alert)

        return alerts

    def run(self):

        self.train()

        self.evaluate()

        self.cross_validate()

        self.feature_importance()

        alerts = self.generate_json_alerts()

        print("\nSample Alert:\n")

        print(
            json.dumps(
                alerts[:3],
                indent=4
            )
        )

        return alerts