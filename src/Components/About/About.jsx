import Footer from "../Utility/Footer/Footer"
import Navbar from "../Utility/Navbar/Navbar"
import AboutHeader from "./AboutHeader"
import AboutStory from "./AboutStory"
import Team from "./Team"
import Values from "./Values"
import "./about.css"

function About() {
  return (
    <div className="about-page-container page">
      <Navbar />
      <AboutHeader />
      <AboutStory />
      <Values />
      <Team />
      <Footer />
    </div>
  )
}

export default About