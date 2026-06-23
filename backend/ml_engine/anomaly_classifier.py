import json
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
class AnomalyClassifier:

    def __init__(self, telemetry_df):
        # Store the telemetry dataframe
        self.telemetry_df = telemetry_df

        # Initialize Random Forest classifier
        self.model = RandomForestClassifier(
            n_estimators=100,
            random_state=42
        )

        # Variables to store train-test split data
        self.X_train = None
        self.X_test = None
        self.y_train = None
        self.y_test = None

    def train(self):
        # Select telemetry features for training
        X = self.telemetry_df[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A"
            ]
        ]

        # Target variable containing anomaly labels
        y = self.telemetry_df["Anomaly_Type"]

        # Split data into training and testing sets
        self.X_train, self.X_test, self.y_train, self.y_test = (
            train_test_split(
                X,
                y,
                test_size=0.2,
                random_state=42,
                stratify=y
            )
        )

        # Train the Random Forest model
        self.model.fit(
            self.X_train,
            self.y_train
        )

    def evaluate(self):
        # Generate predictions on test data
        y_pred = self.model.predict(
            self.X_test
        )

        print("\nClassification Report:\n")

        # Display precision, recall and F1-score
        print(
            classification_report(
                self.y_test,
                y_pred
            )
        )

        print("\nConfusion Matrix:\n")

        # Display confusion matrix
        print(
            confusion_matrix(
                self.y_test,
                y_pred
            )
        )

    def generate_json_alerts(self):

        # Extract only anomalous rows
        anomaly_rows = self.telemetry_df[
            self.telemetry_df["Is_Anomaly"] == 1
        ]

        alerts = []

        # Generate alert for each anomaly
        for _, row in anomaly_rows.iterrows():

            features = [[
                row["Battery_Voltage_V"],
                row["Temperature_C"],
                row["Current_Draw_A"]
            ]]

            # Predict anomaly type
            prediction = self.model.predict(
                features
            )[0]

            # Get highest prediction probability
            confidence = max(
                self.model.predict_proba(
                    features
                )[0]
            )

            # Create JSON alert
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
                        )
                }
            }

            alerts.append(alert)

        return alerts

    def run(self):

        # Train the model
        self.train()

        # Evaluate model performance
        self.evaluate()

        # Generate anomaly alerts
        alerts = self.generate_json_alerts()

        print("\nSample Alert:\n")

        # Display first few alerts
        print(
            json.dumps(
                alerts[:3],
                indent=4
            )
        )

        return alerts