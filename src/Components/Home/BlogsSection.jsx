import CategoryTag from "../Utility/Modules/CategoryTag"
import "./home.css"
import ContactBtn from "../Utility/Modules/ContactBtn";
import ViewAll from "../Utility/Modules/ViewAll";

function BlogsSection() {
  return (
    <div className="blogs-section-container">
      <CategoryTag text="Blogs" />
      <h1>From our Latest Blogs</h1>
      <div className="blogs-section-content">
        
      </div>
      <div className="card-nav-links">
        <ContactBtn />
        <ViewAll />
      </div>
    </div>
  );
}

export default BlogsSection