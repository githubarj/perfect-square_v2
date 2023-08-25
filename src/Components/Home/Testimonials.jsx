import ArrowNavs from "../Utility/Modules/ArrowNavs"
import { homeHeaders } from "./homeData";
import ComponentHeader from "../Utility/Modules/ComponentHeader"
import "./home.css"

function Testimonials() {
  const info = homeHeaders[2]

  return (
    <div className="testimonials-container">
      <ComponentHeader category={info.categoryTag} h1={info.h1} p={info.p} />
      <div className="testimonials-content">
        <div className="testimonials-image"></div>
        <div className="testimonial-info">
          <div className="testimonial-text">
            <p>
              I had a phenomenal experience with the solar, water, and
              construction expertise of Perfect Square. Their team&apos;s
              dedication resulted in flawless installations, ensuring
              sustainable energy and efficient water systems. Their attention to
              detail and seamless project management exceeded my expectations.
              Thanks to their innovative approach, we now enjoy a greener
              environment and reliable infrastructure. I wholeheartedly endorse
              Perfect Solutions for their exceptional services and
              transformative impact.
            </p>
            <div className="client-details">
              <h2>Sarah Thompson</h2>
              <h2 className="client-small-h2">Nairobi, Kenya</h2>
            </div>
          </div>
          <ArrowNavs />
        </div>
      </div>
    </div>
  );
}

export default Testimonials