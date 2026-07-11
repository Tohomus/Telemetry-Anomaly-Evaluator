import {
  Activity,
  AlertTriangle,
  Database,
  Server,
} from "lucide-react";

import Section from "../layout/Section";
import StatCard from "./StatCard";
import { useTelemetryStore } from "../../store/telemetryStore";

function StatsSection() {

  const {generatedSamples,detectedAnomalies,generatedAlerts,backendStatus } = useTelemetryStore();
  return (
    <Section title="Dataset Summary">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Generated Samples"
          value={generatedSamples}
          icon={Database}
        />

        <StatCard
          title="Detected Anomalies"
          value={detectedAnomalies}
          icon={AlertTriangle}
        />

        <StatCard
          title="Generated Alerts"
          value={generatedAlerts}
          icon={Activity}
        />

        <StatCard
          title="Backend Status"
          value={
            backendStatus === "online"
            ? "Online"
            : "Offline"
          }
          icon={Server}
        />
      </div>
    </Section>
  );
}

export default StatsSection;