import "./modules.css"
import PropTypes from "prop-types"
function ArrowNavs(props) {
  return (
    <div className="arrow-nav-btns">
      <button className="nav-btn left" onClick={props.left}>
        <img src="/images/left.png" alt="" className="arrow-size" />
      </button>

      <button className="nav-btn right" onClick={props.right}>
        <img src="/images/right.png" alt="" className="arrow-size" />
      </button>
    </div>
  );
}

ArrowNavs.propTypes = { 
  right: PropTypes.func,
  left: PropTypes.func,
}

export default ArrowNavs