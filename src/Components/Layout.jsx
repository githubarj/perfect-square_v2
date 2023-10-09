import { Outlet } from "react-router-dom";
import Footer from "./Utility/Footer/Footer";
import "../App.css";

function Layout() {
  return (
    <div className="app-container">
      <a
        href="https://api.whatsapp.com/send?phone=254722540649&text=Hello,"
        target="_blank"
        rel="noreferrer"
        className="floating-icon"
      >
        <img src="/images/Icons/icons8-whatsapp-48.png" alt="" />
      </a>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
