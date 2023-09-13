import PropTypes from "prop-types";
import "./modules.css";
function ContactInfo(props) {
  return (
    <a
      className="contact-info-container heading-Small "
      href={props.link}
      rel="noreferrer"
      target="_blank"
    >
      <img src={props.icon} alt="" />
      <h2> {props.h2} </h2>
      <p>{props.text}</p>
    </a>
  );
}

ContactInfo.propTypes = {
  icon: PropTypes.string,
  h2: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

export default ContactInfo;
