import StatusBadge from "../common/StatusBadge";
import { useClock } from "../../hooks/useClock";
import { useBackendStatus } from "../../hooks/useBackendStatus";
import { useTelemetryStore } from "../../store/telemetryStore";

function Navbar() {

  const time = useClock();

  useBackendStatus();

  const { backendStatus } = useTelemetryStore();
  return (
    <header className="border-b border-slate-800 bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="font-heading text-xl font-semibold">
          Telemetry Anomaly Evaluator
        </h1>

        <div className="flex items-center gap-5">

  <div className="flex items-center gap-2">

    <div
      className={`h-2.5 w-2.5 rounded-full ${
        backendStatus === "online"
          ? "bg-green-500"
          : "bg-red-500"
      }`}
    />

    <span className="text-sm text-muted">
      Backend {backendStatus}
    </span>

  </div>

  <span className="font-mono text-sm text-muted">
    {time}
  </span>

</div>

        
      </div>
    </header>
  );
}

export default Navbar;