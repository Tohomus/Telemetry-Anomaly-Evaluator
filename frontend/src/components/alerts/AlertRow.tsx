import Button from "../ui/Button";
import type{ TelemetryRecord } from "../../types/telemetry";

interface Props {
  alert: TelemetryRecord;
}

function AlertRow({ alert }: Props) {
  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/40">
      <td className="px-4 py-3">{alert.timestamp}</td>

      <td className="px-4 py-3">
        {alert.anomalyType}
      </td>

      <td className="px-4 py-3">
        {alert.confidence}%
      </td>

      <td className="px-4 py-3">
        {alert.voltage}
      </td>

      <td className="px-4 py-3">
        {alert.temperature}
      </td>

      <td className="px-4 py-3">
        {alert.current}
      </td>

      <td className="px-4 py-3">
        {alert.power}
      </td>

      <td className="px-4 py-3">
        <Button>
          Analyze
        </Button>
      </td>
    </tr>
  );
}

export default AlertRow;