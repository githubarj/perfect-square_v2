import "./modules.css"
import { Link } from "react-router-dom";

function ViewAll() {
  return (
    <p className="view-links-p">
      <Link className="view-all">View All</Link>
      <img src="/images/arrow.png" alt="" />
    </p>
  );
}

export default ViewAll