import Navbar from "../Utility/Navbar/Navbar";
import Hero from "./Hero";
import Mission from "./Mission";
import Services from "./Services";
import Products from "./Products";
import "./home.css";
import Testimonials from "./Testimonials";
import BlogsSection from "./BlogsSection";
import { homeHeaders } from "./homeData";
import { portfolio } from "../../Data/portfolio";

function Home() {
  const blogInfo = homeHeaders[3];

  const recentBlogs = portfolio.slice(-3);

  return (
    <div className="home-container page">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Products />
      <Testimonials />
      <BlogsSection h1={blogInfo.h1} blogs={recentBlogs} />
    </div>
  );
}

export default Home;
