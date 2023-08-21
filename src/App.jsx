
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Article from './Components/Article/Article';
import Blogs from './Components/Blogs/Blogs';
import Services from './Components/Services/Services';



function App() {
 const location = useLocation();

  return (
    <div className="app-container">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App
