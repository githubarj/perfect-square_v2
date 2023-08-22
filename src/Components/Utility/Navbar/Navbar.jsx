import ContactBtn from "../Modules/ContactBtn";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src="/images/vector.png" alt="" className="icon" />
        <h1>Perfect Square</h1>
      </div>

      <div className="links">
        <ul>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      <ContactBtn />
    </div>
  );
}

export default Navbar;
