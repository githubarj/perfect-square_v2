import Navbar from "../Utility/Navbar/Navbar"
import Clients from "./Clients"
import Hero from "./Hero"
import Mission from "./Mission"
import Services from "./Services"
import Products from "./Products"
import "./home.css"
import Testimonials from "./Testimonials"
import BlogsSection from "./BlogsSection"

function Home() {
  return (
    <div className="home-container page">
      <Navbar/>
      <Hero />
      <Services />
      <Mission />
      <Clients />
      <Products />
      <Testimonials />
      <BlogsSection />
    </div>
  )
}

export default Home