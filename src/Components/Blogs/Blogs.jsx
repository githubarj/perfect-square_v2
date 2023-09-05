import Navbar from "../Utility/Navbar/Navbar";
import { blogsPageHeader } from "./blogsData";
import PageHeader from "../Utility/Modules/PageHeader";
import "./blogs.css";
import HeroBlogs from "./HeroBlogs";
import Collection from "./Collection";

function Blogs() { 
  return (
    <div className="blog-container page">
      <Navbar />
      <PageHeader
        h1={blogsPageHeader.h1}
        p={blogsPageHeader.p}
        display={blogsPageHeader.display}
      />
      <HeroBlogs/>
      <Collection />
    </div>
  );
}

export default Blogs;
