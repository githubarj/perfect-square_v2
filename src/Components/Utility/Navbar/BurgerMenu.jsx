import  { useState } from "react";
import { Link } from "react-router-dom";
import "./burgerMenu.css";

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`menu ${menuOpen ? "open" : ""}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
        
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
  );
}

export default BurgerMenu;
