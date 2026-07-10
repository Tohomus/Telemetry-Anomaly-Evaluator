export interface Telemetry{
  battery_voltage: number;

  temperature: number;

  current_draw: number;

  power: number;
}

export interface TelemetryRecord {

  timestamp: string;

  anomaly_detected: boolean;

  predicted_anomaly_type: string;

  confidence: number;

  telemetry: Telemetry;
}