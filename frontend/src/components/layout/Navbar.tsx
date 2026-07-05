import StatusBadge from "../common/StatusBadge";

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="font-heading text-xl font-semibold">
          Telemetry Anomaly Evaluator
        </h1>

        <div className="flex items-center gap-4">
          <StatusBadge status="online" />

          <span className="text-sm text-muted">
            12:45:12 UTC
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;