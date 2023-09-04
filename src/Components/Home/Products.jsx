import ArrowNavs from "../Utility/Modules/ArrowNavs";
import CategoryTag from "../Utility/Modules/CategoryTag";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { homeHeaders, productData } from "./homeData";
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
            <h1 className="heading-Large">{productData.h1}</h1>
            <p className="heading-XSmall">{productData.p}</p>
          </div>
          <ArrowNavs />
        </div>
        <div className="products-image"></div>
      </div>
    </div>
  );
}

export default Products;
