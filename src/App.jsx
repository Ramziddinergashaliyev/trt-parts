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



import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Leazy from "./components/leazy/Leazy";

// Lazy load pages
const CatalogPage = lazy(() => import("./pages/catalogPage/CatalogPage"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const FilterResults = lazy(() => import("./pages/filterResults/FilterResults"));
const ManageProduct = lazy(() => import("./pages/admin/manageProduct/ManageProduct"));
const CreateProduct = lazy(() => import("./pages/admin/createProduct/CreateProduct"));
const Login = lazy(() => import("./pages/login/Login"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const Company = lazy(() => import("./pages/Company/Company"));
const Partner = lazy(() => import("./pages/partner/Partner"));
const Newost = lazy(() => import("./pages/newost/Newost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Razdel = lazy(() => import("./pages/razdel/Razdel"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const Single = lazy(() => import("./pages/single/Single"));
const Result = lazy(() => import("./pages/result/Result"));
const FilterSearch = lazy(() => import("./pages/filterSearch/FilterSearch"));
const SearchProduct = lazy(() => import("./pages/searchProduct/SearchProduct"));
const Accardion = lazy(() => import("./pages/accardion/Accardion"));

// Loader component (siz alohida loader komponent yaratgan bo‘lsangiz uni qo‘shing)

const App = () => {
  return (
    <Suspense fallback={<Leazy />}>
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
    </Suspense>
  );
};

export default App;
