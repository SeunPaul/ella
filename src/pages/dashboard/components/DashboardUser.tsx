import joseph from "../../../assets/images/joseph.png";

function DashboardUser() {
  return (
    <div className="dashboard-user">
      <div className="left">
        <img src={joseph} alt="" />
      </div>
      <div className="right">
        <h3>Welcome Dr.Joseph!</h3>
        <p>What do you want to do today?</p>
      </div>
    </div>
  );
}

export default DashboardUser;
