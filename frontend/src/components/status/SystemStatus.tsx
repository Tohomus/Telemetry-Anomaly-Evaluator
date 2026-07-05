import Section from "../layout/Section";
import SystemCard from "./SystemCard";

function SystemStatus() {
  return (
    <Section title="System Status">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">

        <SystemCard
          title="Telemetry Simulator"
          status="online"
        />

        <SystemCard
          title="Mahalanobis Engine"
          status="online"
        />

        <SystemCard
          title="Random Forest"
          status="online"
        />

        <SystemCard
          title="Knowledge Base"
          status="online"
        />

        <SystemCard
          title="Gemini API"
          status="online"
        />

      </div>
    </Section>
  );
}

export default SystemStatus;