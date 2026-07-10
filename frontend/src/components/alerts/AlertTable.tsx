import AlertRow from "./AlertRow";
import { useTelemetryStore } from "../../store/telemetryStore";

function AlertTable() {

  const { alerts } = useTelemetryStore();

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700">

      <table className="min-w-full text-sm">

        <thead className="bg-slate-800">

          <tr>

            <th className="px-4 py-3 text-left">
              Timestamp
            </th>

            <th className="px-4 py-3 text-left">
              Type
            </th>

            <th className="px-4 py-3 text-left">
              Confidence
            </th>

            <th className="px-4 py-3 text-left">
              Voltage
            </th>

            <th className="px-4 py-3 text-left">
              Temperature
            </th>

            <th className="px-4 py-3 text-left">
              Current
            </th>

            <th className="px-4 py-3 text-left">
              Power
            </th>

            <th className="px-4 py-3 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {alerts.map((alert, index) => (

            <AlertRow
              key={index}
              alert={alert}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AlertTable;