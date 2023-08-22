import "./modules.css";
import PropTypes from "prop-types";


function CategoryTag(props) {
  return <p className="category">{props.text}</p>;
}

CategoryTag.propTypes = {
  text: PropTypes.string,
};

export default CategoryTag;
