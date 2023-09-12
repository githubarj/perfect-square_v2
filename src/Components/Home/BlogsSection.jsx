import "./home.css"
import ContactBtn from "../Utility/Modules/ContactBtn";
import ViewAll from "../Utility/Modules/ViewAll";
import BlogPanel from "../Utility/Card/BlogPanel";
import ComponentHeader from "../Utility/Modules/ComponentHeader";
import { homeHeaders } from "./homeData";
import PropTypes from "prop-types"

function BlogsSection(props) {
   const info = homeHeaders[3]; 
   
  
  const blogsArray = props.blogs
   const displayedBlogs = blogsArray.map((item, index) => {
      return <BlogPanel key={index}  {...item} />
   } )



  return (
    <div className="blogs-section-container">
      <ComponentHeader category={info.categoryTag} h1={props.h1} p={info.p} />
      <div className="blogs-section-content">
        {displayedBlogs}
      </div>
      <div className="card-nav-links">
        <ContactBtn />
        <ViewAll link="/blogs" />
      </div>
    </div>
  );
}

BlogsSection.propTypes = {
  h1: PropTypes.string,
  blogs: PropTypes.array,
}

export default BlogsSection