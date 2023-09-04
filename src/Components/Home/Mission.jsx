import CategoryTag from "../Utility/Modules/CategoryTag";
import ContactBtn from "../Utility/Modules/ContactBtn";
import { missionData } from "./homeData";
import "./home.css";

function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <div className="mission-text">
          <CategoryTag text="Our Mission Statement" className="category-tag" />
          <h1 className="heading-Large">{missionData.h1}</h1>
          <p className="text-Medium">{missionData.p}</p>
        </div>
        <ContactBtn />
      </div>
      <div className="mission-image"></div>
    </div>
  );
}

export default Mission;
