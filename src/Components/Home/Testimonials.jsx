import ArrowNavs from "../Utility/Modules/ArrowNavs";
import { homeHeaders } from "./homeData";
import { testimonials as data } from "../../Data/Testimonials";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { useState } from "react";

import "./home.css";

function Testimonials() {
  const info = homeHeaders[2];

  const [testimonial, setTestimonial] = useState(data[0]);

  function changeTestimonialRight() {
    data.indexOf(testimonial) < data.length - 1
      ? setTestimonial((prevTestimonial) => {
          return data[data.indexOf(prevTestimonial) + 1];
        })
      : setTestimonial(data[0]);
  }

  function changeTestimonialLeft() {
    data.indexOf(testimonial) > 0
      ? setTestimonial((prevTestimonial) => {
          return data[data.indexOf(prevTestimonial) - 1];
        })
      : setTestimonial(data[data.length - 1]);
  } 

  return (
    <div className="testimonials-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="testimonials-content">
        <div
          className="testimonials-image"
          style={{ backgroundImage: `url(${testimonial.testimoanialImage})` }}
        ></div>
        <div className="testimonial-info">
          <div className="testimonial-text">
            <p className="heading-XSmall">{testimonial.testimonialText}</p>
            <div className="client-details">
              <h1 className="heading-Medium"> {testimonial.name} </h1>
              <h1 className=" heading-Medium small-h1">
                {testimonial.location}
              </h1>
            </div>
          </div>
          <ArrowNavs
            right={changeTestimonialRight}
            left={changeTestimonialLeft}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
