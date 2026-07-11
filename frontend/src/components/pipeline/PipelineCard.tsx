import Card from "../ui/Card";
import Button from "../ui/Button";
import StatusBadge from "../common/StatusBadge";

interface Props {
  title: string;

  buttonText: string;

  status:
    | "idle"
    | "running"
    | "completed";

  onClick?: () => void;
}

function PipelineCard({
  title,
  buttonText,
  status,
  onClick,
}: Props) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          {title}
        </h3>

        <StatusBadge status={status} />
      </div>

      <Button
        className="mt-6 w-full"
        onClick={onClick}
        disabled={
          status === "running"
          ||
          status === "completed"
        }
      >
       {status === "running"
        ? "Processing..."
        : status === "completed"
        ? "Completed"
        : buttonText} 
      </Button>
    </Card>
  );
}

export default PipelineCard;