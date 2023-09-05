import { useNavigate } from "react-router-dom";

import "./modules.css";
function ContactBtn() {
  const navigate = useNavigate();
  const navToContact = () => {
    navigate("/contact");
  };

  return (
    <button className="contact-btn text-Medium" onClick={navToContact}>
      Contact Us
    </button>
  );
}

export default ContactBtn;
