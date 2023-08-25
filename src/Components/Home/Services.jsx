import Card from "../Utility/Card/Card";
import "./home.css";
import ContactBtn from "../Utility/Modules/ContactBtn";
import ViewAll from "../Utility/Modules/ViewAll";
import { homeHeaders } from "./homeData";
import ComponentHeader from "../Utility/Modules/ComponentHeader";

function Services() {
  const info = homeHeaders[0];
  return (
    <div className="services-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="services-content">
        <div className="services-cards">
          <Card
            icon="/images/solar.png"
            title="Solar Solutions"
            text="We offer a wide range of solar systems that are designed to provide clean, reliable and cost efective energy for homes, institutions and businesses"
          />
          <Card
            icon="/images/construction.png"
            title="Construction & Project Management"
            text="Our company specializes in managing and delivering high-quality, efficient construction projects on time and within budget. We have a strong track record of successfully managing a wide range of projects from residential to commercial and industrial."
          />
          <Card
            icon="/images/borehole.png"
            title="Borehole Drilling "
            text="Secure your water supply and reduce your dependence on municipal sources with our borehole drilling services. We specialize drilling and installation of boreholes for residential and commercial properties. "
          />
        </div>
        <div className="card-nav-links">
          <ContactBtn />
          <ViewAll />
        </div>
      </div>
    </div>
  );
}

export default Services;
