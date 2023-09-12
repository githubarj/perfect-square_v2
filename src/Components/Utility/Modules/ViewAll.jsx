import "./modules.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ViewAll(props) {
  return (
    <Link className="view-all heading-XSmall" to={props.link}>
      View All
      <img src="/images/arrow.png" alt="" className={props.rotate} />
    </Link>
  );
}

ViewAll.propTypes = {
  rotate: PropTypes.string,
  link: PropTypes.string,
};

export default ViewAll;
