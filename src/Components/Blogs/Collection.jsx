import BlogPanel from "../Utility/Card/BlogPanel";
import "./blogs.css";

function Collection() {
  return (
    <div className="collection-container">
      <div className="blog-groups">
        <p className="active">All</p>
        <p>Solar Solutions</p>
        <p>Contruction & Project Management</p>
        <p>Borehole Drilling</p>
      </div>
      <div className="blog-collections">
        <BlogPanel />
        <BlogPanel /> 
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
        <BlogPanel />
      </div>
    </div>
  );
}

export default Collection;
