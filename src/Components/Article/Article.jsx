import "./article.css";
import Navbar from "../Utility/Navbar/Navbar";
import ArticleOverview from "./ArticleOverview";
import ArticleContent from "./ArticleContent";
import BlogsSection from "../Home/BlogsSection";
import { related } from "./articleData";
function Article() {
  return (
    <div className="article-container page">
      <Navbar />
      <ArticleOverview />
      <ArticleContent />
      <BlogsSection {...related} />
    </div>
  );
}

export default Article;
