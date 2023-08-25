import Card from "../Utility/Card/Card";
import { values } from "./aboutData";
import CategoryTag from "../Utility/Modules/CategoryTag";
import "./about.css";

function Values() {
  const valuesSection = values.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="values-container">
      <div className="values-header">
        <CategoryTag text="Our Values" />
        <h1>Guided by Integrity and Purpose</h1>
        <p>
          At Perfect Square, we are driven by a strong set of values that shape
          every aspect of our business, ensuring transparency, ethical
          practices, and a shared commitment to making a positive impact.
        </p>
      </div>
      <div className="values-main">
        {valuesSection}
      </div>
    </div>
  );
}

export default Values;
