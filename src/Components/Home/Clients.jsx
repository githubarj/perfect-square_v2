import CategoryTag from "../Utility/Modules/CategoryTag";
import "./home.css"

function Clients() {
  return (
    <div className="clients-container">
      <div className="clients-content">
        <CategoryTag text="Our Clients" />
        <h1>Trusted by Many Satisfied Customers</h1>
        <p>
          Join our roster of satisfied clients and experience the exceptional
          results and service that have earned us recognition countrywide.
        </p>
      </div>
    </div>
  );
}

export default Clients