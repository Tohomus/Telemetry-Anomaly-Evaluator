import {
  Activity,
  AlertTriangle,
  Database,
  Server,
} from "lucide-react";

import Section from "../layout/Section";
import StatCard from "./StatCard";

function StatsSection() {
  return (
    <Section title="Dataset Summary">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Generated Samples"
          value="5,000"
          icon={Database}
        />

        <StatCard
          title="Detected Anomalies"
          value="42"
          icon={AlertTriangle}
        />

        <StatCard
          title="Generated Alerts"
          value="42"
          icon={Activity}
        />

        <StatCard
          title="Backend Status"
          value="Online"
          icon={Server}
        />
      </div>
    </Section>
  );
}

export default StatsSection;