import "./article.css";
import PropTypes from "prop-types";

function ArticleOverview(props) {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="oc-header">
          <p className="blog-group text-Medium">{props.tag}</p>
          <p className="oc-date text-Medium ">{props.date}</p>
        </div>
        <h1 className="heading-XLarge">{props.heading}</h1>
      </div>
      <div
        className="overview-pic"
        style={{ backgroundImage: `url(${props.coverImg})` }}
      ></div>
    </div>
  );
}

ArticleOverview.propTypes = {
  tag: PropTypes.string,
  date: PropTypes.string,
  heading: PropTypes.string,
  coverImg: PropTypes.string,
};

export default ArticleOverview;
