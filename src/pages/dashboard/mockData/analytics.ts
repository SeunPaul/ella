import { AnalyticsType } from "../types";

const analytics: AnalyticsType[] = [
  {
    id: 1,
    text: "Total patients",
    value: 182,
    rate: 38,
    rateStatus: "increase",
    description: "Total test analysis",
  },
  {
    id: 2,
    text: "Diagnosed patients",
    value: 85,
    rate: 24,
    rateStatus: "increase",
    description: "Total patients diagnosed",
  },
  {
    id: 3,
    text: "Diagnosed patients",
    value: 40,
    rate: 14,
    rateStatus: "decrease",
    description: "Chronic diagonsed patients",
  },
  {
    id: 4,
    text: "Diagnosed patients",
    value: 20,
    rate: 24,
    rateStatus: "increase",
    description: "No Diagnosis",
  },
];

export default analytics;
