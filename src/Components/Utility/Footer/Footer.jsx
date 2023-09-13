import Logo from "../Modules/Logo";
import { Link } from "react-router-dom";
import { footerLinks } from "./footerLinks";
import "./footer.css";

function Footer() {

const links = footerLinks.map((item, index)=> {
  return (
    <a  key={index} href={item.link} target="_blank" rel="noreferrer"  >
      <img src= {item.iconImg} alt="" className="link-icon" />
    </a>
  );
})
  

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-links-section">
          <Logo />
          <div className="links">
            <ul>
              <li>
                <Link className="footer-links text-Medium  " to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-links text-Medium " to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer-links text-Medium " to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="footer-links text-Medium " to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="link-contact-us">
                <Link className="footer-links text-Medium  " to="/pricing">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <p className="text-Small">
            <a href="https://githubarj.tech/" target="blank">
              © 2023 GithubaRJ.
            </a>
            &nbsp;&nbsp;All rights reserved.
          </p>
          <div className="social-icons">
            {links}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
