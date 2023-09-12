import BlogPanel from "../Utility/Card/BlogPanel";
import { portfolio, toggles } from "../../Data/portfolio";
import "./blogs.css";
import { useEffect, useState } from "react";

function Collection() {
  const [currentCategory, setCurrentCategory] = useState({ tag: "all" });
  const [blogs, setBlogs] = useState([]);
  const [active, setActive] = useState(0);

  function changeCategory(e, index) {
    setCurrentCategory({ tag: e.target.textContent.toLowerCase() });
    console.log(e);
    setActive(index);
  }

  useEffect(() => {
    currentCategory.tag === "all"
      ? setBlogs(portfolio)
      : setBlogs(
          portfolio.filter((work) => {
            return work.tag.toLowerCase() === currentCategory.tag;
          })
        );
  }, [currentCategory]);

  const categories = toggles.map((item, index) => {
    return (
      <p
        key={index}
        onClick={(e) => {
          changeCategory(e, index);
        }}
        className={` ${index === active && "active"}`}
      >
        {item.tag}
      </p>
    );
  });

  const allBlogs = blogs.map((item, index) => {
    return <BlogPanel key={index} {...item} />;
  });

  return (
    <div className="collection-container">
      <div className="blog-groups">{categories}</div>
      <div className="blog-collections">{allBlogs}</div>
    </div>
  );
}

export default Collection;
