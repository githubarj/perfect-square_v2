import "./services.css";
import { componentHeaders } from "./servicesData";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import Card from "../Utility/Card/Card";
import { products } from "../../Data/Products";

function ServicesBody() {
  const header = componentHeaders[0];

  const allProducts = products.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="services-body-container">
      <ComponentHeader
        category={header.categoryTag}
        h1={header.h1}
        p={header.p}
        span={header.span}
      />
      <div className="products-collection">{allProducts}</div>
    </div>
  );
}

export default ServicesBody;
