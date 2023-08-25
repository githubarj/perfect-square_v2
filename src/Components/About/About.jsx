import Footer from "../Utility/Footer/Footer"
import Navbar from "../Utility/Navbar/Navbar"
import AboutStory from "./AboutStory"
import Team from "./Team"
import Values from "./Values"
import { pageHeader } from "./aboutData"
import "./about.css"
import PageHeader from "../Utility/Modules/PageHeader"

function About() {
  return (
    <div className="about-page-container page">
      <Navbar />
      <PageHeader h1={pageHeader.h1} p={pageHeader.p} display={pageHeader.display}/>
      <AboutStory />
      <Values />
      <Team />
      <Footer />
    </div>
  );
}

export default About