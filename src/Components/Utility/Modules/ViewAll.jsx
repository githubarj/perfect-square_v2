import "./modules.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function ViewAll(props) {
  return (
    <p className="view-links-p">
      <Link className="view-all" to={props.link}>View All</Link>
      <img src="/images/arrow.png" alt="" className={props.rotate} />
    </p>
  );
}

ViewAll.propTypes ={
  rotate: PropTypes.string,
  link: PropTypes.string

}



export default ViewAll