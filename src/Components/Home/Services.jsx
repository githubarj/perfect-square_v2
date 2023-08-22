import Card from "../Utility/Card/Card";
import "./home.css"
import ContactBtn from "../Utility/Modules/ContactBtn";
import CategoryTag from "../Utility/Modules/CategoryTag";
import ViewAll from "../Utility/Modules/ViewAll";

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <CategoryTag text="Services" />
        <h1>Discover excellence, explore our exceptional services</h1>
        <p>Experience top-notch solutions tailored to your needs today!</p>
      </div>
      <div className="services-content">
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
      <div className="services-links">
        <ContactBtn />
        <ViewAll />
      </div>
    </div>
  );
}

export default Services;
