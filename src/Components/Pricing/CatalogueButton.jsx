import "./pricing.css";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { catalogueItems } from "./pricingData";

function CatalogueButton() {
  return (
    <div className="catalog-container">
      <ComponentHeader
        category={catalogueItems.category}
        h1={catalogueItems.h1}
        p={catalogueItems.p}
      />
      <a download="" className="catalog-button" href={catalogueItems.pdf}>
        <img src="/images/Icons/catalog.png" alt="" />
        <p className="heading-XSmall">Download</p>
      </a>
    </div>
  );
}

export default CatalogueButton;
