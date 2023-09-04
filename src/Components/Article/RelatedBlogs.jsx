import "../Home/home.css";
import ContactBtn from "../Utility/Modules/ContactBtn";
import ViewAll from "../Utility/Modules/ViewAll";
import BlogPanel from "../Utility/Card/BlogPanel";

function RelatedBlogs() {
  return (
    <div className="blogs-section-container">
      <h1>Related Blogs</h1>
      <div className="blogs-section-content">
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
      </div>
      <div className="card-nav-links">
        <ContactBtn />
        <ViewAll link="/blogs" />
      </div>
    </div>
  );
}

export default RelatedBlogs;
