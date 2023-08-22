import CategoryTag from "../Utility/Modules/CategoryTag"
import ContactBtn from "../Utility/Modules/ContactBtn";
import "./home.css"

function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <div className="mission-text">
          <CategoryTag text="Our Mission Statement" className ="category-tag" />
          <h1>
            Empowering Sustainability Through Solar, Water, and Construction
            Solutions
          </h1>
          <p>
            At Perfect Square, our mission is to drive sustainable progress
            through the seamless integration of solar energy, efficient water
            drilling, and innovative construction solutions. By harnessing the
            power of the sun, providing access to vital water resources, and
            executing visionary construction projects, we&rsquo;re committed to
            shaping a greener, brighter, and more resilient future for
            communities and the environment alike.
          </p>
        </div>
        <ContactBtn />
      </div>
      <div className="mission-image">
      </div>
    </div>
  );
}

export default Mission;
