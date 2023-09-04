import ArrowNavs from "../Utility/Modules/ArrowNavs";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { aboutHeader,aboutTeam } from "./aboutData";
import "./about.css";

function Team() {
  const info = { ...aboutHeader[1] };
  const team = { ...aboutTeam[0] };
  return (
    <div className="team-container">
      <div className="team-main">
        <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
        <div className="member-info">
          <div className="member-info-text">
            <p className="heading-XSmall">{team.text}</p>
          </div>
          <div className="member-info-details">
            <h1 className="member-name heading-XSmall">{team.name} </h1>
            <p className="member-post heading-XSmall"> {team.position} </p>
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
      <div
        className="member-image"
        style={{ backgroundImage: `url(${team.image})` }}
      ></div>
      <div className="team-arrow-navs">
        <ArrowNavs />
      </div>
    </div>
  );
}

export default Team;
