import Status from "../../../components/ui/status/Status";
import activityLog from "../mockData/activityLog";
import { ActivityLogType } from "../types";

function ActivityCard({
  profilePic,
  name,
  diagnosisComment,
  diagnosisStatus,
}: ActivityLogType) {
  return (
    <div className="activity-card">
      <div className="left">
        <div>
          <img src={profilePic} alt="" />
        </div>
        <div className="name-comment">
          <h3>{name}</h3>
          <p>{diagnosisComment}</p>
        </div>
      </div>
      <div className="right">
        {diagnosisStatus === "diagnosed" ? (
          <Status
            text="Diaagnosed"
            type="block"
            color="#d92d20"
            backgroundColor="#fef3f2"
          />
        ) : (
          <Status
            text="No diagnosis"
            type="block"
            color="#155eef"
            backgroundColor="#eff4ff"
          />
        )}
      </div>
    </div>
  );
}

function DashboardActivityLog() {
  return (
    <div className="dashboard-activity-log">
      <p className="table-description">Activity Log</p>
      <div className="activity-content">
        {activityLog.map((info) => (
          <ActivityCard
            key={info.id}
            id={info.id}
            profilePic={info.profilePic}
            name={info.name}
            diagnosisComment={info.diagnosisComment}
            diagnosisStatus={info.diagnosisStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardActivityLog;
