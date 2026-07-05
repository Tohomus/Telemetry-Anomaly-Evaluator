import Section from "../layout/Section";

import AlertToolbar from "./AlertToolbar";
import AlertTable from "./AlertTable";

function AlertExplorer() {
  return (
    <Section title="Alert Explorer">

      <AlertToolbar />

      <AlertTable />

    </Section>
  );
}

export default AlertExplorer;