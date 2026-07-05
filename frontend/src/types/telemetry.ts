export interface TelemetryRecord {
  id: number;

  timestamp: string;

  voltage: number;

  temperature: number;

  current: number;

  power: number;

  anomalyType: string;

  confidence: number;
}