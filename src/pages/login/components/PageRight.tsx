import loginHero from "../../../assets/images/loginHero.jpg";

function PageRight() {
  return (
    <div className="onboarding-page-right">
      <div className="onboarding-hero">
        <div
          className="onboarding-hero-img"
          style={{
            backgroundImage: `url(${loginHero})`,
          }}
        />
      </div>
    </div>
  );
}

export default PageRight;
