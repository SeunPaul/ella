import Table from "../../../components/ui/table/Table";
import diagnosisReport from "../mockData/diagnosisReports";
import download from "../../../assets/icons/download.svg";

function DashboardDiagnosisReport() {
  return (
    <div className="dashboard-diagnosis-report">
      <p className="table-description">Patient diagnosis report</p>
      <Table
        darkHead
        tableHead={[
          { key: 1, value: "S/N" },
          { key: 2, value: "Name of Patient" },
          { key: 3, value: "Report ID" },
          { key: 4, value: "Diagnosis" },
          { key: 5, value: "Report" },
        ]}
        tableBody={diagnosisReport.map((report, i) => ({
          key: report.id,
          entry: [
            { key: 1, value: i + 1 },
            { key: 2, value: report.name },
            { key: 3, value: report.reportId },
            { key: 4, value: report.diagnosis },
            { key: 5, value: <img src={download} alt="" /> },
          ],
        }))}
      />
    </div>
  );
}

export default DashboardDiagnosisReport;
