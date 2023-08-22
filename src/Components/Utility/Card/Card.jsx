import "./card.css"
import PropTypes from "prop-types";



function Card(props) {

  return (
    <div className="card-container">
        <img src={props.icon} alt="" />
        <h1>{props.title}</h1>
        <p> {props.text} </p>
    </div>
  )
}

Card.propTypes = {
  // Define prop types here
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card