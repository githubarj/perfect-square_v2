import "./article.css";
import ArticleParagraph from "../Utility/Modules/ArticleParagraph";
import { articleData } from "./articleData";

function ArticleContent() {
  const data = articleData.map((item) => {
    return <ArticleParagraph key={item.id} {...item} />;
  });

  return (
    <div className="a-c-container">
      <div className="ac-slideshow"></div>
      <div className="ac-wrapper">{data}</div>
    </div>
  );
}

export default ArticleContent;
