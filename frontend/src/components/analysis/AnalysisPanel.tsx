import Card from "../ui/Card";
import SeverityBadge from "./SeverityBadge";

function AnalysisPanel() {
    return (
        <Card>

            <h2 className="mb-6 text-xl font-heading">
                AI Analysis
            </h2>

            <div className="space-y-6">

                <div>

                    <h3 className="mb-2 font-semibold">
                        Summary
                    </h3>

                    <p className="text-sm text-muted">
                        Select an anomaly from the table to
                        generate an AI explanation.
                    </p>

                </div>

                <div>

                    <h3 className="mb-2 font-semibold">
                        Possible Causes
                    </h3>

                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted">

                        <li>Waiting for analysis...</li>

                    </ul>

                </div>

                <div>

                    <h3 className="mb-2 font-semibold">
                        Recommended Actions
                    </h3>

                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted">

                        <li>Waiting for analysis...</li>

                    </ul>

                </div>

                <div>

                    <h3 className="mb-2 font-semibold">
                        Severity
                    </h3>

                    <SeverityBadge severity="Low" />

                </div>

            </div>

        </Card>
    );
}

export default AnalysisPanel;