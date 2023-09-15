import ContactBtn from "../Modules/ContactBtn";
import Logo from "../Modules/Logo";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navItems } from "../../../Data/navItems";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  function toggleMenu() {
    setMenuVisible((prev) => !prev);

    if (hideMenu === false) {
      setTimeout(() => {
        setHideMenu((prev) => !prev);
      }, 400);
    } else {
      setHideMenu((prev) => !prev);
    }
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const className = screenWidth >= 768 ? "links" : "dropdown-menu";

  const navOptions = navItems.map((item, index) => {
    return (
      <Link className="nav-links text-Medium" to={item.to} key={index}>
        <li>{item.name}</li>
      </Link>
    );
  });

  return (
    <div className="navbar-container">
      <Logo />
      <div
        className={`${className} ${menuVisible ? "open" : `close`} ${
          hideMenu && "hide"
        }  `}
      >
        <ul className="nav-options">
          {navOptions} <ContactBtn />
        </ul>
      </div>
      <ContactBtn />

      {/* Burger Menu */}
      <div
        onClick={toggleMenu}
        className={`burger-menu ${menuVisible ? "open" : "close"} `}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
