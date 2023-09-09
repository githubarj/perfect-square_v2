import "./home.css";
import Card from "../Utility/Card/Card";
import ContactBtn from "../Utility/Modules/ContactBtn";
import ViewAll from "../Utility/Modules/ViewAll";
import { homeHeaders } from "./homeData";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { products } from "../../Data/Products";

function Services() {

  const mainPageProducts = products.slice(0, 3)

  const info = homeHeaders[0];
  const servicesCards = mainPageProducts.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="services-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="services-content">
        <div className="services-cards">
          {servicesCards}
        </div>
        <div className="card-nav-links">
          <ContactBtn className="contact-btn-show"/>
          <ViewAll
          link="/services"
           />
        </div> 
      </div>
    </div>
  );
}

export default Services;
