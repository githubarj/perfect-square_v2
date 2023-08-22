import Navbar from "../Utility/Navbar/Navbar"
import Hero from "./Hero"
import Products from "./Products"

function Home() {
  return (
    <div className="home-container page">
      <Navbar/>
      <Hero />
      <Products />
    </div>
  )
}

export default Home