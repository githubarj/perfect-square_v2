import Logo from "../Modules/Logo";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-links-section">
          <Logo />
          <div className="links">
            <ul>
              <li>
                <Link className="footer-links" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="footer-links" to="/pricing">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <p>
            <a href="https://githubarj.tech/" target="blank">© 2023 GithubaRJ.</a> All rights
            reserved.
          </p>
          <div className="social-icons">
            <a href="">
              <img src="/images/twitter.png" alt="" className="link-icon tw-icon" />
            </a>

            <a href="">
              <img src="/images/facebook.png" alt="" className="link-icon" />
            </a>
            <a href="">
              <img src="/images/linkedIn.png" alt="" className="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
