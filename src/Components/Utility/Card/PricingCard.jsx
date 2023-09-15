import "./card.css";
import PropTypes from "prop-types";

function PricingCard(props) {
  const constantItems = props.constant.map((item, index) => {
    return (
      <li key={index}>
        {item.text}
        <img src="/images/tick.png" alt="" />
      </li>
    );
  });

  const uniqueItems = props.unique.map((item, index) => {
    return <li key={index}>{item.text}</li>;
  });

  return (
    <div className="pc-container">
      <h1 className="heading-Medium"> {props.product} </h1>
      <h1 className="heading-XLarge">KSH {props.price}</h1>
      <a
        href="https://api.whatsapp.com/send?phone=254722540649&text=Hello"
        rel="noreferrer"
        target="_blank"
        className="heading-XSmall"
      >
        Get Started
      </a>
      <div className="pc-details">
        <div className="pc-details-constant">
          <ul>{constantItems}</ul>
        </div>
        <div className="pc-details-unique">
          <p>Details</p>
          <ul>{uniqueItems}</ul>
        </div>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  product: PropTypes.string,
  price: PropTypes.string,
  constant: PropTypes.array,
  unique: PropTypes.array,
};

export default PricingCard;
