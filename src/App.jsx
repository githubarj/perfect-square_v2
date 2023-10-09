import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Article from "./Components/Article/Article";
import Blogs from "./Components/Blogs/Blogs";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/Utility/ScrollToTop";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/*" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route exact path="/article/:id" element={<Article />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={routes}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
