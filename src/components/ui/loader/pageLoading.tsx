import loader from "../../../assets/illustrations/loader.png";
import "./loader.css";

function PageLoading() {
  return (
    <div className="page-loading">
      <img src={loader} alt="" />
    </div>
  );
}

export default PageLoading;
