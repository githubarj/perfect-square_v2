import Navbar from "../Utility/Navbar/Navbar"
import Hero from "./Hero"
import Mission from "./Mission"
import Services from "./Services"
import Products from "./Products"
import "./home.css"
import Testimonials from "./Testimonials"
import BlogsSection from "./BlogsSection"
import Footer from "../Utility/Footer/Footer"

function Home() { 
  return (
    <div className="home-container page">
      <Navbar/>
      <Hero />
      <Services />
      <Mission />
      <Products />
      <Testimonials />
      <BlogsSection />
      <Footer />
    </div>
  )
}

export default Home