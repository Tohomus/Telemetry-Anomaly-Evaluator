import Button from "../ui/Button";
import type{ TelemetryRecord } from "../../types/telemetry";
import { useAnalysis } from "../../hooks/useAnalysis"
import { useTelemetryStore } from "../../store/telemetryStore";

interface Props {
  alert: TelemetryRecord;
}

function AlertRow({ alert }: Props) {

  const { handleAnalyze } = useAnalysis();

  const { selectedAlert } = useTelemetryStore();

  const isSelected = selectedAlert?.timestamp === alert.timestamp;
  return (
    <tr className={`border-b border-slate-700 transition-colors
      ${
        isSelected
          ? "bg-blue-900/30"
          : "hover:bg-slate-800/40"
      }`}>
      <td className="px-4 py-3">{alert.timestamp}</td>

      <td className="px-4 py-3">
        <span className="rounded bg-slate-700 px-2 py-1 text-xs">
    {alert.predicted_anomaly_type}
</span>
      </td>

      <td className="px-4 py-3">
        <span
    className={`rounded px-2 py-1 text-xs font-semibold
    ${
        alert.confidence >= 0.90
            ? "bg-green-500/20 text-green-400"

        : alert.confidence >= 0.75
            ? "bg-yellow-500/20 text-yellow-400"

        : "bg-red-500/20 text-red-400"
    }`}
>
    {(alert.confidence * 100).toFixed(1)}%
</span>
        
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