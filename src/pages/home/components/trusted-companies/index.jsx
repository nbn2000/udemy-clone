import "./styles.css";
import studioLogo from "../../../../assets/studio.png";
import upsomLogo from "../../../../assets/logo-ipsum.png";
import upsomLogo2 from "../../../../assets/logo-ipsum-2.jpg";

const TrustedCompanies = () => {
  return (
    <div className="trusted-company">
      <h2>Trusted by Company</h2>
      <div className="logos">
        <img src={studioLogo} alt="studiologo" />
        <img src={upsomLogo} alt="upsomLogo" />
        <img src={upsomLogo2} alt="upsomlogo2" />
        <img src={studioLogo} alt="studiologo" />
        <img src={upsomLogo2} alt="upsomlogo2" />
        <img src={upsomLogo} alt="upsomlogo" />
      </div>
    </div>
  );
};

export default TrustedCompanies;
