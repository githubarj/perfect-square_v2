import "./card.css";

function PricingCard() {
  return (
    <div className="pc-container">
      <h2>Geological Survey</h2>
      <p>KSH 50,000</p>
      <button>Get Started</button>
      <div className="pc-details">
        <div className="pc-details-constant">
          <ul>
            <li>
              Served by Industry Proffesionals
              <img src="/public/images/tick.png" alt="" />
            </li>
            <li>
              Excellent Customer Support
              <img src="/public/images/tick.png" alt="" />
            </li>
            <li>
              Guidance through out the Project
              <img src="/public/images/tick.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="pc-details-unique">
          <p>Details</p>
          <ul>
            <li>Site Selection and Evaluation</li>
            <li>Geophysical Surveys</li>
            <li>Geotechnical Testing</li>
            <li>Geological Logging</li>
            <li>Detailed Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
