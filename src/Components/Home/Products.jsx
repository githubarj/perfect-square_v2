import ArrowNavs from "../Utility/Modules/ArrowNavs";
import CategoryTag from "../Utility/Modules/CategoryTag";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { homeHeaders } from "./homeData";
import "./home.css";

function Products() {
  const info = homeHeaders[1]
  return (
    <div className="products-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="products-main">
        <div className="products-content">
          <div className="products-content-text">
            <CategoryTag text="Products" />
            <h1>Solar Security Lights</h1>
            <p>
              Enhance the security of your property and reduce your energy costs
              with our solar-powered security lights. Our solar-powered security
              lights are energy efficient, easy to install, and require no
              electrical wiring.
            </p>
          </div>
          <ArrowNavs />
        </div>
        <div className="products-image"></div>
      </div>
    </div>
  );
}

export default Products;
