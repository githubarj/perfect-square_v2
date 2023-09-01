
import "./blogs.css"
import { Link } from "react-router-dom";

function HeroBlogs() {
  return (
    <div className="hb-container">
      <div className="hb-image"></div>
      <div className="hb-content">
        <div className="hb-group">
          <h2>Solar</h2>
        </div>
        <div className="hb-panel-content">
          <h1>
            Illuminating Success: Installing Solar Panels for a Delighted
            Customer
          </h1>
          <p>
            In the vibrant city of Nairobi, Kenya, we shed light on success by
            installing cutting-edge solar panels for a delighted customer.
            Discover how our sustainable solution transformed energy dynamics
            and brightened their future.
          </p>
        </div>
        <Link to="/article" className="read-more">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default HeroBlogs