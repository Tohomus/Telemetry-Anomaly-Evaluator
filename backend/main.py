#This is the actual place where both of our codes relate. You have to import the classes from both of our files and call it here. Write the code and Test whether it works. 
from simulator.anomaly_simulator import TelemetrySimulator
from anomaly_engine.mahalnobis_engine import MahalanobisDistanceDetector

# Generate telemetry data
simulator = TelemetrySimulator()
telemetry_df = simulator.generate_data()

# Detect anomalies
detector = MahalanobisDistanceDetector(telemetry_df)
result_df = detector.run()

print(result_df.head(20))