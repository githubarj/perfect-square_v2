import "./card.css";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";


function BlogPanel(props) {
  return (
    <div className="blog-panel-container">
      <div className="blog-panel-main">
        <div
          className="blog-panel-image"
          style={{ backgroundImage: `url${props.coverImg}` }}
        ></div>
        <div className="blog-group">
          <h2 className="text-Medium">{props.tag}</h2>
        </div>
        <div className="blog-panel-content">
          <h1 className="heading-Small">{props.heading}</h1>
          <p className="heading-XSmall">{props.description}</p>
        </div>
      </div>
      <Link to="/article" className="read-more heading-XSmall">
        Read more
      </Link>
    </div>
  );
}

BlogPanel.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.string,
  coverImg: PropTypes.string,
};



export default BlogPanel;
