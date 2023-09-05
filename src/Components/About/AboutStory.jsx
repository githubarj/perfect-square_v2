import CategoryTag from "../Utility/Modules/CategoryTag";
import "./about.css";
import { aboutStory } from "./aboutData";

function AboutStory() {
  return ( 
    <div className="story-container">
      <div className="story-initial story-unit">
        <div className="story-text">
          <CategoryTag text="Our Story" />
          <p className="heading-XSmall">{aboutStory.p1}</p>
        </div>
        <div className="story-img"></div>
      </div>
      <div className="story-second story-unit">
        <div className="story-img"></div>
        <div className="story-text">
          <p className="heading-XSmall">{aboutStory.p2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
