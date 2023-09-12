import "./blogs.css";
import { Link } from "react-router-dom";
import { portfolio } from "../../Data/portfolio";

function HeroBlogs() {
  const heroBlog = portfolio[portfolio.length - 1];
  return (
    <div className="hb-container">
      <div
        className="hb-image"
        style={{ backgroundImage: `url(${heroBlog.coverImg})` }}
      ></div>
      <div className="hb-content">
        <div className="hb-group">
          <h2 className="text-Medium">{heroBlog.tag}</h2>
        </div>
        <div className="hb-panel-content">
          <h1 className="heading-Large">{heroBlog.heading}</h1>
          <p className="heading-Small">{heroBlog.description}</p>
        </div>
        <Link to="/article" className="read-more heading-XSmall">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default HeroBlogs;
