import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import CatalogPage from "./pages/catalogPage/CatalogPage";
import FilterResults from "./pages/filterResults/FilterResults";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Company from "./pages/Company/Company";
import Partner from "./pages/partner/Partner";
import Contact from "./pages/Contact/Contact";
import Razdel from "./pages/razdel/Razdel";
import Single from "./pages/single/Single";
import Result from "./pages/result/Result";
import FilterSearch from "./pages/filterSearch/FilterSearch";
import SearchProduct from "./pages/searchProduct/SearchProduct";
import Accardion from "./pages/accardion/Accardion";
import NewsPage from "./pages/newsPage/NewsPage";
import News from "./pages/news/News";
import NewsSingle from "./pages/newsSingle/newsSingle";

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
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
