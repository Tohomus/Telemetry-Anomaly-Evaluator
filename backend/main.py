#This is the actual place where both of our codes relate. You have to import the classes from both of our files and call it here. Write the code and Test whether it works. 
from simulator.anomaly_simulator import TelemetrySimulator
from anomaly_engine.mahalnobis_engine import MahalanobisDistanceDetector
from ml_engine.anomaly_classifier import AnomalyClassifier


def main():

    print("=" * 60)
    print("Generating Telemetry Data")
    print("=" * 60)

    simulator = TelemetrySimulator(
        sampling_interval_secs=1.0,
        total_duration_hr=24.0
    )

    telemetry_df = simulator.generate_data(
        anomaly_probability=0.005
    )

    simulator.export_to_csv(
        telemetry_df,
        "backend/sample_data/telemetry_stream.csv"
    )

    print(f"\nGenerated {len(telemetry_df)} telemetry samples.")


    print("\n" + "=" * 60)
    print("Running Mahalanobis Distance Detector")
    print("=" * 60)

    detector = MahalanobisDistanceDetector(
        telemetry_df
    )

    result_df = detector.run()

    print("\nMahalanobis Results:")
    print(
        result_df[
            [
                "Mahalanobis_Distance",
                "Is_Anomaly",
                "Anomaly_Type"
            ]
        ].head(10)
    )


    print("\n" + "=" * 60)
    print("Running Random Forest Anomaly Classifier")
    print("=" * 60)

    classifier = AnomalyClassifier(
        result_df
    )

    alerts = classifier.run()

    print(f"\nTotal Alerts Generated: {len(alerts)}")

    print("\nPipeline completed successfully.")


if __name__ == "__main__":
    main()