type Status =
  | "idle"
  | "running"
  | "completed"
  | "online"
  | "offline"
  | "warning"
  | "error";

interface Props {
  status: Status;
}

function StatusBadge({ status }: Props) {
  const statusStyles = {
    idle: "bg-slate-700 text-slate-200",
    running: "bg-blue-600/20 text-blue-400",
    completed: "bg-green-600/20 text-green-400",
    online: "bg-green-600/20 text-green-400",
    offline: "bg-red-600/20 text-red-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    error: "bg-red-600/20 text-red-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;