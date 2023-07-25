import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import joseph from "../../../assets/images/doctor.jpg";

function DashboardUser() {
  const appData = useContext(AppContext);
  return (
    <div className="dashboard-user">
      <div className="left">
        <img src={joseph} alt="" />
      </div>
      <div className="right">
        <h3>Welcome Dr. {appData?.user.name.split(" ")[1]}!</h3>
        <p>What do you want to do today?</p>
      </div>
    </div>
  );
}

export default DashboardUser;
