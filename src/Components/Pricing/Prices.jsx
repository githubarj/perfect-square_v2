
import PricingCard from "../Utility/Card/PricingCard"
import "./pricing.css"

function Prices() {
  return (
    <div className="prices-container">
      <PricingCard />
      <PricingCard />
      <PricingCard />
    </div>
  );
}

export default Prices