import ContactBtn from "../Modules/ContactBtn";
import Logo from "../Modules/Logo";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <Logo />
      <div className="links">
        <ul>
          <li>
            <Link className="nav-links text-Medium" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links text-Medium" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links text-Medium" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-links text-Medium" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="nav-links text-Medium" to="/pricing">
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
