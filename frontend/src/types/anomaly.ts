export interface AIAnalysis {
  summary: string;

  possibleCauses: string[];

  recommendedActions: string[];

  severity: "Low" | "Medium" | "High" | "Critical";
}