import ContactBtn from "../Utility/Modules/ContactBtn";
import "./home.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <h1 className="heading-XXLarge">
          Powering Futures, Drilling Depths, Building Sustainable Dreams
        </h1>
        <p className="text-Medium">
          Your vision, our commitment. Let&rsquo;s start!
        </p>
        <ContactBtn />
      </div>
      <div className="hero-banner"></div>
      <div className="stats">
        <div className="stat">
          <h1 className="heading-XLarge">120+</h1>
          <p className="text-large">Projects Completed</p>
        </div>
        <div className="stat">
          <h1 className="heading-XLarge">8</h1>
          <p className="text-large">Years of Experience</p>
        </div>
        <div className="stat">
          <h1 className="heading-XLarge">100%</h1>
          <p className="text-large">Satisfied Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
