import CategoryTag from "./CategoryTag";
import PropTypes from "prop-types"
import "./modules.css"

function ComponentHeader(props) { 
  return (
    <div>
      <div className="components-header-container">
        <CategoryTag text={props.category}/>
        <h1 className="heading-XLarge">{props.h1}</h1>
        <p className="text-Medium ">
          {props.p}
          <a href="">{props.span}</a>
        </p>
      </div>
    </div>
  );
}

ComponentHeader.propTypes = {
  category: PropTypes.string,
  h1: PropTypes.string,
  p: PropTypes.string,
  span: PropTypes.string,
};

export default ComponentHeader