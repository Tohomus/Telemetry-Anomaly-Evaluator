import type{ LucideIcon } from "lucide-react";
import Card from "../ui/Card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">{title}</p>

          <h3 className="mt-2 font-mono text-2xl font-semibold text-text">
            {typeof value === "number"
              ? value === 0
                ? "--"
              : value.toLocaleString()
            : value}
          </h3>
        </div>

        <div className="rounded-lg bg-slate-800 p-3">
          <Icon size={22} className="text-accent" />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;