import { useState } from "react";
import Navigation from "../dashboard/components/Navigation";
import AnalyseUser from "./components/AnalyseUser";
import AnalyseByValue from "./components/AnalyseByValue";
import AnalyseByMammogram from "./components/AnalyseByMammogram";
import "../dashboard/dashboard.css";
import "./analyse.css";

function Analyse() {
  const [page, setPage] = useState("value");
  return (
    <div className="dashboard">
      <div>
        <Navigation page="analyze" />
      </div>
      <div className="dashboard-section dashboard-section-1">
        <AnalyseUser />
      </div>
      <div className="analyse-nav">
        <p
          className={page === "value" ? "active" : ""}
          onClick={() => {
            setPage("value");
          }}
        >
          Test result
        </p>
        <p
          className={page === "mammogram" ? "active" : ""}
          onClick={() => {
            setPage("mammogram");
          }}
        >
          Mammogram
        </p>
      </div>
      <div className="analyse-wrapper">
        {page === "value" ? <AnalyseByValue /> : <AnalyseByMammogram />}
      </div>
    </div>
  );
}

export default Analyse;
