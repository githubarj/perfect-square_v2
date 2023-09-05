import "./services.css";
import { componentHeaders, services } from "./servicesData";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import Card from "../Utility/Card/Card";

function ServicesBody() {
  const header = componentHeaders[0];

  const products = services.map((item) => {
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
      <div className="products-collection">{products}</div>
    </div>
  );
}

export default ServicesBody;
