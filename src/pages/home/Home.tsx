import Navigation from "../dashboard/components/Navigation";
import frame from "../../assets/images/frame.png";
import cancer from "../../assets/images/breast-cancer-banner.jpg";
import yoga from "../../assets/images/woman-breast-cancer.jpg";
import unilagLogo from "../../assets/icons/unilag.png";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <Navigation page="home" />
      </div>
      <div className="section-1">
        <h1>Early Detection of Breast Cancer</h1>
        <h1>With AI-Powered Digital Dashboard</h1>
        <p>
          — Breast cancer is the most common cancer among women, and early
          detection is key to survival. Our digital dashboard uses the latest
          technology to help you detect breast cancer early.
        </p>
      </div>
      <div className="section-2">
        <img src={frame} alt="" />
      </div>
      <div className="section-3">
        <div>
          <h2>Facilitating Early Detection</h2>
          <p>
            Early detection is critical for successful treatment. Don&apos;t
            wait any longer to get the care you need. See our doctor today.
          </p>
        </div>
        <div>
          <h4>Creating Awareness on Breast Cancer</h4>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <h4>Analysing test results to get accurate results</h4>
          <p>
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </div>
      </div>
      <div className="section-4">
        <img src={cancer} alt="" />
      </div>
      <div className="section-5">
        <h2>Creating Awareness on Breast Cancer</h2>
        <p>
          Early detection is critical for successful treatment. Don&apos;t wait
          any longer to get the care you need. Sign up for our digital dashboard
          today.
        </p>
      </div>
      <div className="section-6">
        <div>
          <h3>What is Breast Cancer</h3>
          <p>
            Breast cancer is a type of cancer that starts in the breast. It is
            the most common cancer among women, accounting for about 25% of all
            cancers diagnosed in women.
          </p>
          <h3>Types of Breast Cancer</h3>
          <ul>
            <li>In situ breast cancer</li>
            <li>Invasive breast cancer</li>
          </ul>
          <h3>Reducing Breast Cancer Risks</h3>
          <p>
            <li>
              Get regular mammograms: Mammograms are the best way to detect
              breast cancer early....
            </li>
          </p>
        </div>
        <div>
          <img src={yoga} alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="group1">
          <p>Powered by</p>
          <img src={unilagLogo} alt="" />
        </div>
        {/* <div className="group2">
          <h3>Credits:</h3>
          <p>Implementation by NITHUB DEV TEAM</p>
          <p>Seun Oluwafemi - Frontend Engineer and Dev Team Lead</p>
          <p>Ikuomola Olamide - UI/UX Designer</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
