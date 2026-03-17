import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

// import CatalogPage from "./pages/catalogPage/CatalogPage";
// import FilterResults from "./pages/filterResults/FilterResults";
// import Layout from "./components/layout/Layout";
// import Home from "./pages/home/Home";
// import Company from "./pages/Company/Company";
// import Partner from "./pages/partner/Partner";
// import Contact from "./pages/Contact/Contact";
// import Razdel from "./pages/razdel/Razdel";
// import Single from "./pages/single/Single";
// import Result from "./pages/result/Result";
// import FilterSearch from "./pages/filterSearch/FilterSearch";
// import SearchProduct from "./pages/searchProduct/SearchProduct";
// import Accardion from "./pages/accardion/Accardion";
// import NewsPage from "./pages/newsPage/NewsPage";
// import News from "./pages/news/News";
// import NewsSingle from "./pages/newsSingle/newsSingle";
// import NotFound from "./pages/notfound/Notfound";

const CatalogPage = lazy(() => import("./pages/catalogPage/CatalogPage"));
const FilterResults = lazy(() => import("./pages/filterResults/FilterResults"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const Company = lazy(() => import("./pages/Company/Company"));
const Partner = lazy(() => import("./pages/partner/Partner"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Razdel = lazy(() => import("./pages/razdel/Razdel"));
const Single = lazy(() => import("./pages/single/Single"));
const Result = lazy(() => import("./pages/result/Result"));
const FilterSearch = lazy(() => import("./pages/filterSearch/FilterSearch"));
const SearchProduct = lazy(() => import("./pages/searchProduct/SearchProduct"));
const Accardion = lazy(() => import("./pages/accardion/Accardion"));
const NewsPage = lazy(() => import("./pages/newsPage/NewsPage"));
const News = lazy(() => import("./pages/news/News"));
const NewsSingle = lazy(() => import("./pages/newsSingle/newsSingle"));
const NotFound = lazy(() => import("./pages/notfound/Notfound"));

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/razdel" element={<Razdel />} />
          <Route path="/company" element={<Company />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/filter" element={<FilterSearch />} />
          <Route path="/news" element={<News />} />
          <Route path="/result" element={<Result />} />
          <Route path="/accardion" element={<Accardion />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/new" element={<NewsPage />} />
          <Route path="/filterResults" element={<FilterResults />} />
          <Route path="/:categoryName/:id" element={<CatalogPage />} />
          <Route path='/news-single/:id' element={<NewsSingle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      
      <ToastContainer />
    </>
  );
};

export default App;
