import "./article.css";
import PropTypes from "prop-types"

function ArticleContent(props) {
  
  return (
    <div className="a-c-container">
      <div className="ac-slideshow" style={{backgroundImage: `url(${props.url})` }} ></div>
    </div>
  );
}

ArticleContent.propTypes = {
  url: PropTypes.string,
}

export default ArticleContent;
