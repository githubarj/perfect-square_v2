import "./modules.css";
import PropTypes from "prop-types";

function ArticleParagraph(props) {
  return (
    <div className="ap-container">
      <h1 className="ap-h1">{props.heading}</h1>
      <ul>
        {props.content.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

ArticleParagraph.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.array,
};

export default ArticleParagraph;
