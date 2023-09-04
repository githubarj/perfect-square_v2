import ArrowNavs from "../Utility/Modules/ArrowNavs";
import { homeHeaders, testimonialData } from "./homeData";
import ComponentHeader from "../Utility/Modules/ComponentHeader";

import "./home.css";

function Testimonials() {
  const info = homeHeaders[2];

  return (
    <div className="testimonials-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="testimonials-content">
        <div className="testimonials-image"></div>
        <div className="testimonial-info">
          <div className="testimonial-text">
            <p className="heading-XSmall">{testimonialData.testimonialText}</p>
            <div className="client-details">
              <h1 className="heading-Medium"> {testimonialData.name} </h1>
              <h1 className=" heading-Medium small-h1">
                {testimonialData.location}
              </h1>
            </div>
          </div>
          <ArrowNavs />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
