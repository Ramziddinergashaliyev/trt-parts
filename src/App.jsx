import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Leazy from "./components/leazy/Leazy";
import Maksud from "./pages/maksud/Maksud";
import Kamron from "./pages/kamron/Kamron";

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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

const App = () => {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Suspense fallback={<Leazy />}>
        <Routes location={location}>
          <Route path="/maksud" element={<Maksud />} />
          <Route path="/kamron" element={<Kamron />} />
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
            <Route path="/news-single/:id" element={<NewsSingle />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;