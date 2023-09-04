import "./card.css";
import { Link } from "react-router-dom";

function BlogPanel() {
  return (
    <div className="blog-panel-container">
      <div className="blog-panel-main">
        <div className="blog-panel-image"></div>
        <div className="blog-group">
          <h2 className="text-Medium">Solar</h2>
        </div>
        <div className="blog-panel-content">
          <h1 className="heading-Small">
            Illuminating Success: Installing Solar Panels for a Delighted
            Customer
          </h1>
          <p className="heading-XSmall">
            In the vibrant city of Nairobi, Kenya, we shed light on success by
            installing cutting-edge solar panels for a delighted customer.
            Discover how our sustainable solution transformed energy dynamics
            and brightened their future.
          </p>
        </div>
      </div>
      <Link to="/article" className="read-more heading-XSmall">
        Read more
      </Link>
    </div>
  );
}

export default BlogPanel;
