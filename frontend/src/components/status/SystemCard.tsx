import Card from "../ui/Card";
import StatusBadge from "../common/StatusBadge";

interface Props {
  title: string;
  status: "online" | "offline";
}

function SystemCard({ title, status }: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">
            Service
          </p>

          <h3 className="mt-1 font-semibold">
            {title}
          </h3>
        </div>

        <StatusBadge status={status} />
      </div>
    </Card>
  );
}

export default SystemCard;