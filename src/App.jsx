import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Article from "./Components/Article/Article";
import Blogs from "./Components/Blogs/Blogs";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Utility/Footer/Footer";

function App() {
  const location = useLocation();

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
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/*" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route exact path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
