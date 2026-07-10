import Button from "../ui/Button";
import type{ TelemetryRecord } from "../../types/telemetry";
import { useAnalysis } from "../../hooks/useAnalysis"

interface Props {
  alert: TelemetryRecord;
}

function AlertRow({ alert }: Props) {

  const { handleAnalyze } = useAnalysis();
  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/40">
      <td className="px-4 py-3">{alert.timestamp}</td>

      <td className="px-4 py-3">
        {alert.predicted_anomaly_type}
      </td>

      <td className="px-4 py-3">
        {(alert.confidence * 100).toFixed(1)}%
      </td>

      <td className="px-4 py-3">
        {alert.telemetry.battery_voltage.toFixed(2)} V
      </td>

      <td className="px-4 py-3">
        {alert.telemetry.temperature.toFixed(2)} °C
      </td>

      <td className="px-4 py-3">
        {alert.telemetry.current_draw.toFixed(2)} A
      </td>

      <td className="px-4 py-3">
        {alert.telemetry.power.toFixed(2)} W
      </td>

      <td className="px-4 py-3">
        <Button
          onClick={() => handleAnalyze(alert)}
        >
          Analyze
        </Button>
      </td>
    </tr>
  );
}

export default AlertRow;