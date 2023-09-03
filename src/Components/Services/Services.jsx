import Navbar from "../Utility/Navbar/Navbar";
import Footer from "../Utility/Footer/Footer";
import "./services.css";
import ServicesBody from "./ServicesBody";

function Services() {
  return (
    <div className="services-container page">
      <Navbar />
      <ServicesBody />

      <Footer />
    </div>
  );
}

export default Services;
