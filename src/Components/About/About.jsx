import Navbar from "../Utility/Navbar/Navbar"
import AboutStory from "./AboutStory"
import Team from "./Team"
import Values from "./Values"
import { aboutPageHeader } from "./aboutData"
import "./about.css"
import PageHeader from "../Utility/Modules/PageHeader"

function About() {
  return (
    <div className="about-page-container page">
      <Navbar /> 
      <PageHeader h1={aboutPageHeader.h1} p={aboutPageHeader.p} display={aboutPageHeader.display}/>
      <AboutStory />
      <Values />
      {/* <Team /> */}
    </div>
  );
}

export default About