
import PricingCard from "../Utility/Card/PricingCard"
import { prices } from "../../Data/Prices";
import "./pricing.css"

function Prices() { 

  const pricing = prices.map((item, index) => {
    return <PricingCard key={index} {...item} />
  })

  return (
    <div className="prices-container">
      {pricing}
    </div>
  );
}

export default Prices