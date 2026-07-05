import AlertRow from "./AlertRow";
import type{ TelemetryRecord } from "../../types/telemetry";

const demoAlerts: TelemetryRecord[] = [
  {
    id: 1,
    timestamp: "12:43:21",
    anomalyType: "Voltage Spike",
    confidence: 98,
    voltage: 31.4,
    temperature: 28.2,
    current: 3.1,
    power: 97.3,
  },
  {
    id: 2,
    timestamp: "12:45:10",
    anomalyType: "Temperature Rise",
    confidence: 91,
    voltage: 28.1,
    temperature: 43.5,
    current: 2.9,
    power: 81.5,
  },
];

function AlertTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700">
      <table className="min-w-full text-sm">

        <thead className="bg-slate-800">
          <tr>

            <th className="px-4 py-3 text-left">Timestamp</th>

            <th className="px-4 py-3 text-left">Type</th>

            <th className="px-4 py-3 text-left">Confidence</th>

            <th className="px-4 py-3 text-left">Voltage</th>

            <th className="px-4 py-3 text-left">Temperature</th>

            <th className="px-4 py-3 text-left">Current</th>

            <th className="px-4 py-3 text-left">Power</th>

            <th className="px-4 py-3 text-left">Action</th>

          </tr>
        </thead>

        <tbody>

          {demoAlerts.map((alert) => (

            <AlertRow
              key={alert.id}
              alert={alert}
            />

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default AlertTable;