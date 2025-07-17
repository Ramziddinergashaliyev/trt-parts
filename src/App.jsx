// import React, { lazy, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

// const CatalogPage = lazy(() => import("./pages/catalogPage/CatalogPage"));
// const Auth = lazy(() => import("./pages/auth/Auth"));
// const FilterResults = lazy(() => import("./pages/filterResults/FilterResults"));
// const ManageProduct = lazy(() => import("./pages/admin/manageProduct/ManageProduct"));
// const CreateProduct = lazy(() => import("./pages/admin/createProduct/CreateProduct"));
// const Login = lazy(() => import("./pages/login/Login"));
// const Layout = lazy(() => import("./components/layout/Layout"));
// const Home = lazy(() => import("./pages/home/Home"));
// const Company = lazy(() => import("./pages/Company/Company"));
// const Partner = lazy(() => import("./pages/partner/Partner"));
// const Newost = lazy(() => import("./pages/newost/Newost"));
// const Contact = lazy(() => import("./pages/Contact/Contact"));
// const Razdel = lazy(() => import("./pages/razdel/Razdel"));
// const Admin = lazy(() => import("./pages/admin/Admin"));
// const Single = lazy(() => import("./pages/single/Single"));
// const Result = lazy(() => import("./pages/result/Result"));
// const FilterSearch = lazy(() => import("./pages/filterSearch/FilterSearch"));
// const SearchProduct = lazy(() => import("./pages/searchProduct/SearchProduct"));
// const Accardion = lazy(() => import("./pages/accardion/Accardion"));

// const App = () => {

//   return (
//     <>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/razdel" element={<Razdel />} />
//           <Route path="/company" element={<Company />} />
//           <Route path="/partner" element={<Partner />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/single/:id" element={<Single />} />
//           <Route path="/filter" element={<FilterSearch />} />
//           <Route path="/newost" element={<Newost />} />
//           <Route path="/result" element={<Result />} />
//           <Route path="/accardion" element={<Accardion />} />
//           <Route path="/search" element={<SearchProduct />} />
//           <Route path="/filterResults" element={<FilterResults />} />
//           <Route path="/rychagi-podveski/:id" element={<CatalogPage />} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/" element={<Admin />}>
//           <Route path="manageProduct" element={<ManageProduct />} />
//           <Route path="createProduct" element={<CreateProduct />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// Oddiy importlar
import CatalogPage from "./pages/catalogPage/CatalogPage";
import Auth from "./pages/auth/Auth";
import FilterResults from "./pages/filterResults/FilterResults";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Company from "./pages/Company/Company";
import Partner from "./pages/partner/Partner";
import Newost from "./pages/newost/Newost";
import Contact from "./pages/Contact/Contact";
import Razdel from "./pages/razdel/Razdel";
import Admin from "./pages/admin/Admin";
import Single from "./pages/single/Single";
import Result from "./pages/result/Result";
import FilterSearch from "./pages/filterSearch/FilterSearch";
import SearchProduct from "./pages/searchProduct/SearchProduct";
import Accardion from "./pages/accardion/Accardion";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/razdel" element={<Razdel />} />
        <Route path="/company" element={<Company />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/filter" element={<FilterSearch />} />
        <Route path="/newost" element={<Newost />} />
        <Route path="/result" element={<Result />} />
        <Route path="/accardion" element={<Accardion />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/filterResults" element={<FilterResults />} />
        <Route path="/rychagi-podveski/:id" element={<CatalogPage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/admin/" element={<Admin />}>
        <Route path="manageProduct" element={<ManageProduct />} />
        <Route path="createProduct" element={<CreateProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
