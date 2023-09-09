import ArrowNavs from "../Utility/Modules/ArrowNavs";
import CategoryTag from "../Utility/Modules/CategoryTag";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { homeHeaders } from "./homeData";
import { products as data } from "../../Data/Products";
import { useState } from "react";
import "./home.css";

function Products() {
  const info = homeHeaders[1];

  const [product, setProduct] = useState(data[0]);

  function changeProductRight() {
    data.indexOf(product) < data.length - 1
      ? setProduct((prevProduct) => {
          return data[data.indexOf(prevProduct) + 1];
        })
      : setProduct(data[0]);
  }

  function changeProductLeft() {
    data.indexOf(product) > 0
      ? setProduct((prevProduct) => {
          return data[data.indexOf(prevProduct) - 1];
        })
      : setProduct(data[data.length - 1]);
  }

  return (
    <div className="products-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />

      <div className="products-main">
        <div className="products-content">
          <div className="products-content-text">
            <CategoryTag text="Products" />
            <h1 className="heading-Large">{product.title}</h1>
            <p className="heading-XSmall">{product.text}</p>
          </div>
          <ArrowNavs right={changeProductRight} left={changeProductLeft} />
        </div>
        <div
          className="products-image"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        ></div>
      </div>
    </div>
  );
}

export default Products;
