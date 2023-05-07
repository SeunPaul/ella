export type AnalyticsType = {
  id: number;
  text: string;
  value: number;
  rate: number;
  rateStatus: "increase" | "decrease";
  description: string;
};

export type DiagnosisReportType = {
  id: number;
  name: string;
  reportId: string;
  diagnosis: string;
  document: string;
};

export type ActivityLogType = {
  id: number;
  profilePic: string;
  name: string;
  diagnosisComment: string;
  diagnosisStatus: "diagnosed" | "no diagnosis";
};
