import React, { Fragment, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Auto from "../../components/auto/Auto";
import Prinsp from "../../components/prinsp/Prinsp";
import Vapros from "../../components/vapros/Vapros";
import Filter from "../../components/filter/Filter";
import Catalog from "../../components/katalog/Catalog";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Hero />
      <Filter />
      <Auto />
      <Prinsp />
      <Catalog />
      <Vapros /> 
    </Fragment>
  );
};

export default Home;
