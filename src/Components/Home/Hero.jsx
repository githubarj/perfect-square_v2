import ContactBtn from "../Utility/Modules/ContactBtn";
import "./home.css"

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <h1>Powering Futures, Drilling Depths, Building Sustainable Dreams</h1>
        <p>Your vision, our commitment. Let&rsquo;s start!</p>
        <ContactBtn />
      </div>
      <div className="hero-banner"></div>
      <div className="stats">
        <div className="stat">
          <h1>120+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h1>8</h1>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h1>100%</h1>
          <p>Satisfied Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
