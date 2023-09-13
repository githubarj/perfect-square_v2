import Navbar from "../Utility/Navbar/Navbar"
import PageHeader from "../Utility/Modules/PageHeader";
import { pricingPageHeader } from "./pricingData";
import "./pricing.css"
import Prices from "./Prices";
import CatalogueButton from "./CatalogueButton";

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
      <CatalogueButton />
    </div>
  );
}

export default Pricing