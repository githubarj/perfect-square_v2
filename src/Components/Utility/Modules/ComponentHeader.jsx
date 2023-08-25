import CategoryTag from "./CategoryTag";
import PropTypes from "prop-types"
import "./modules.css"

function ComponentHeader(props) {
  return (
    <div>
      <div className="components-header-container">
        <CategoryTag text={props.category} />
        <h1>{props.h1}</h1>
        <p>
          {props.p}
        </p>
      </div>
    </div>
  );
}

ComponentHeader.propTypes = {
  category: PropTypes.string,
  h1: PropTypes.string,
  p: PropTypes.string,
};

export default ComponentHeader