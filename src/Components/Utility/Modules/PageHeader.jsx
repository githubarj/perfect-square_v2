import ContactBtn from "./ContactBtn"
import PropTypes from "prop-types"
import "./modules.css"

function PageHeader(props) {
  return (
    <div className="page-header-container">
      <h1 className="heading-XLarge">{props.h1}</h1>
      <p className="text-Medium">{props.p}</p>
      <div className="btn-display" style={{ display: `${props.display}` }}>
        <ContactBtn />
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  h1: PropTypes.string,
  p: PropTypes.string,
  display: PropTypes.string,
};



export default PageHeader