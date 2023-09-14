import "./article.css";
import Navbar from "../Utility/Navbar/Navbar";
import ArticleOverview from "./ArticleOverview";
import ArticleContent from "./ArticleContent";
import BlogsSection from "../Home/BlogsSection";
import { related } from "./articleData";
import { portfolio } from "../../Data/portfolio";
import { useParams } from "react-router-dom";

function Article() {
  const recentBlogs = portfolio.slice(-3);
  const { id } = useParams();
  const data = portfolio[id];
  const article = data.articleData;

  console.log(data.articleData.content);

  const content = article.pictures.map((item, index) => {
    return <ArticleContent key={index} {...item} />;
  });

  return (
    <div className="article-container page">
      <Navbar />
      <ArticleOverview {...data} />
      {content}
      <BlogsSection {...related} blogs={recentBlogs} />
    </div>
  );
}

export default Article;
