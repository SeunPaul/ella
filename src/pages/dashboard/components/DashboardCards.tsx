import AnalyticsCard from "../../../components/ui/card/AnalyticsCard";
import analytics from "../mockData/analytics";

function DashboardCards() {
  return (
    <div className="dashboard-cards-grid">
      {analytics.map((info, i) => (
        <div key={info.id} className={`grid-child grid-child-${i + 1}`}>
          <AnalyticsCard
            text={info.text}
            rate={info.rate}
            rateStatus={info.rateStatus}
            value={info.value}
            description={info.description}
          />
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
