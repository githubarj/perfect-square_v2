import ContactBtn from "../Modules/ContactBtn";
import Logo from "../Modules/Logo";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };



  return ( 
    <div className="navbar-container">
      <Logo />
      <div className={`links ${menuVisible ? "open" : ""}`}>
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
      <div
        className={`burger-menu ${menuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuVisible && (
        <div className={`dropdown-menu ${menuVisible ? "open" : ""}`}>
          <ul>
            <li>
              <Link className="nav-links text-Medium" to="/">
                Home
              </Link>
            </li>
            <hr className="menu-break" />
            <li>
              <Link className="nav-links text-Medium" to="/about">
                About
              </Link>
            </li>
            <hr className="menu-break" />
            <li>
              <Link className="nav-links text-Medium" to="/services">
                Services
              </Link>
            </li>
            <hr className="menu-break" />
            <li>
              <Link className="nav-links text-Medium" to="/blogs">
                Blogs
              </Link>
            </li>
            <hr className="menu-break" />
            <li>
              <Link className="nav-links text-Medium" to="/pricing">
                Pricing
              </Link>
            </li>
            <hr className="menu-break" />
            <li>
              <ContactBtn />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
