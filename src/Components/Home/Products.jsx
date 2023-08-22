import ArrowNavs from "../Utility/Modules/ArrowNavs";
import CategoryTag from "../Utility/Modules/CategoryTag";
import "./home.css";

function Products() {
  return (
    <div className="products-container">
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
      <div className="products-image">
      </div>
    </div>
  );
}

export default Products;
