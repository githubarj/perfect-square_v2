import "./article.css"
import Navbar from "../Utility/Navbar/Navbar"
import Footer from "../Utility/Footer/Footer"
import ArticleOverview from "./ArticleOverview"
import ArticleContent from "./ArticleContent"
import RelatedBlogs from "./RelatedBlogs"
function Article() {
  return (
    <div className="article-container page">
      <Navbar />
      <ArticleOverview />
      <ArticleContent />
      <RelatedBlogs />

      <Footer />

    </div>
  )
}

export default Article