import joseph from "../../../assets/images/doctor.jpg";

function AnalyseUser() {
  return (
    <div className="dashboard-user">
      <div className="left">
        <img src={joseph} alt="" />
      </div>
      <div className="right">
        <h3>Analyse Test Results</h3>
        <p>Upload your test results and get your diagnosis immediately.</p>
      </div>
    </div>
  );
}

export default AnalyseUser;
