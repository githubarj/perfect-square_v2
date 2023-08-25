import PropTypes from "prop-types";
import "./modules.css";
function ContactInfo(props) {
  return (
    <div className="contact-info-container">
      <img src={props.icon} alt="" />
      <h2> {props.h2} </h2>
      <a href={props.link}>{props.text}</a>
    </div>
  );
}

ContactInfo.propTypes = {
  icon: PropTypes.string,
  h2: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

export default ContactInfo;
