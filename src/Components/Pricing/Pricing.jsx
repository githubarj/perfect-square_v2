import Navbar from "../Utility/Navbar/Navbar"
import PageHeader from "../Utility/Modules/PageHeader";
import { pricingPageHeader } from "./pricingData";
import "./pricing.css"
import Prices from "./Prices";

function Pricing() {
  return (
    <div className="pricing-container page">
      <Navbar />
      <PageHeader
        h1={pricingPageHeader.h1}
        p={pricingPageHeader.p}
        display={pricingPageHeader.display}
      />
      <Prices/>
    </div>
  );
}

export default Pricing