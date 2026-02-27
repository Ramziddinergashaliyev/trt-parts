import React, { Fragment, memo, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Auto from "../../components/auto/Auto";
import Prinsp from "../../components/prinsp/Prinsp";
import Vapros from "../../components/vapros/Vapros";
import Filter from "../../components/filter/Filter";
import Catalog from "../../components/katalog/Catalog";
import NewsCard from "../../components/newsCard/NewsCard";
import YoutubeCard from "../../components/youtubecard/YoutubeCard";

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
      <NewsCard />
      <YoutubeCard />
      <Vapros />
    </Fragment>
  );
};

export default memo(Home);
