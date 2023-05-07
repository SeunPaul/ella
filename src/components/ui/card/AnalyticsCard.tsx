import { AnalyticsCardProps } from "./types";
import { ReactComponent as People } from "../../../assets/icons/people.svg";
import Status from "../status/Status";
import "./card.css";

function AnalyticsCard({
  text,
  value,
  rate,
  rateStatus,
  description,
}: AnalyticsCardProps) {
  return (
    <div className="analytics-card">
      <div className="icon-background">
        <People />
      </div>
      <div className="text-rate">
        <span>{text}</span>
        {rateStatus === "increase" ? (
          <Status
            type="pill"
            text={`+${rate}%`}
            color="#039855"
            backgroundColor="#ecfdf3"
          />
        ) : (
          <Status
            type="pill"
            text={`-${rate}%`}
            color="#d92d20"
            backgroundColor="#fef3f2"
          />
        )}
      </div>
      <div className="value">
        <h1>{value}</h1>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default AnalyticsCard;
