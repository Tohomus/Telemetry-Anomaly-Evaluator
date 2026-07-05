import PipelineCard from "./PipelineCard";
import PipelineConnector from "./PipelineConnector";

import { PIPELINE_STAGES } from "../../constants/pipeline";

function PipelineSection() {
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-xl font-heading">
        Processing Pipeline
      </h2>

      <div className="flex items-center">
        {PIPELINE_STAGES.map((stage, index) => (
          <div
            key={stage.id}
            className="flex items-center flex-1"
          >
            <PipelineCard
              title={stage.title}
              buttonText={stage.button}
              status="idle"
            />

            {index <
              PIPELINE_STAGES.length - 1 && (
              <PipelineConnector />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PipelineSection;