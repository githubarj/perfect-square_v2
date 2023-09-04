import "./modules.css";
import PropTypes from "prop-types";


function CategoryTag(props) {
  return <p className="category text-Medium">{props.text}</p>; 
}

CategoryTag.propTypes = {
  text: PropTypes.string,
};

export default CategoryTag;
