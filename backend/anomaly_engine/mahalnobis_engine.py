#U have to write your code here. Mention the import of libraries u are using here and don't have to add any main function in this file. Okay?
import numpy as np
import pandas as pd


class MahalanobisDistanceDetector:

    def __init__(self, telemetry_df):
        self.telemetry_df = telemetry_df
        self.mean = None
        self.inv_cov = None
        self.threshold = None

    def train(self):
        normal_data = self.telemetry_df[
            self.telemetry_df["Is_Anomaly"] == 0
        ]

        X_train = normal_data[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
            ]
        ].to_numpy()

        self.mean = np.mean(X_train, axis=0)

        cov_matrix = np.cov(
            X_train,
            rowvar=False
        )

        self.inv_cov = np.linalg.pinv(cov_matrix)

    def calculate_distances(self):
        X = self.telemetry_df[
            [
                "Battery_Voltage_V",
                "Temperature_C",
                "Current_Draw_A",
                "Power_W"
            ]
        ].to_numpy()

        distances = []

        for x in X:
            d = np.sqrt(
                (x - self.mean).T
                @ self.inv_cov
                @ (x - self.mean)
            )

            distances.append(d)

        self.telemetry_df[
            "Mahalanobis_Distance"
        ] = distances

    def detect_anomalies(self):
        
        self.threshold = np.percentile(
            self.telemetry_df["Mahalanobis_Distance"],
            99
        )

        self.telemetry_df["MD_Anomaly"] = (
            self.telemetry_df["Mahalanobis_Distance"]
            > self.threshold
        ).astype(int)

    def evaluate(self):
        print("\nConfusion Matrix:")

        print(
            pd.crosstab(
                self.telemetry_df["Is_Anomaly"],
                self.telemetry_df["MD_Anomaly"]
            )
        )

    def run(self):
        self.train()
        self.calculate_distances()
        self.detect_anomalies()
        self.evaluate()

        print(
            self.telemetry_df[
                [
                    "Mahalanobis_Distance",
                    "Is_Anomaly",
                    "Anomaly_Type"
                ]
            ].head()
        )

        return self.telemetry_df
    