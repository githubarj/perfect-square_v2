import { Link } from "react-router-dom";
import "./modules.css"
function ContactBtn() {
  return (
    <button className="contact-btn">
      <Link className="contact-btn-link" to= "/contact" >Contact Us</Link>
    </button>
  );
}

export default ContactBtn