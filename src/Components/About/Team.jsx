import ArrowNavs from "../Utility/Modules/ArrowNavs";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { aboutHeader } from "./aboutData";
import "./about.css";

function Team() {
  const info = { ...aboutHeader[1] };
  return (
    <div className="team-container">
      <div className="team-main">
        <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
        <div className="member-info">
          <div className="member-info-text">
            <p>
              During a train ride, a moment of inspiration struck Vasily. He
              wished for a convenient study tool on his phone to help him
              prepare for the LSAT. However, such an app didn&apos;t exist at
              the time. Determined to overcome this hurdle, Vasily took matters
              into his own hands and developed one of the earliest and most
              comprehensive LSAT apps on the market. The app quickly gained
              popularity, becoming the #1 paid LSAT app for over a year.
            </p>
          </div>
          <div className="member-info-details">
            <h2 className="member-name">John Wick</h2>
            <p className="member-post">CEO of Perfect Square</p>
            <div className="member-social-links">
              <a href="">
                <img
                  src="/images/TwitterP.png"
                  alt=""
                  className="twitter-size"
                />
              </a>
              <a href="">
                <img src="/images/FacebookP.png" alt="" />
              </a>
              <a href="">
                <img src="/images/LinkedinP.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="member-image"></div>
      <div className="team-arrow-navs">
        <ArrowNavs />
      </div>
    </div>
  );
}

export default Team;
