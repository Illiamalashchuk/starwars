import React, { useEffect, useState, useContext } from "react";

import { Context as FilmsContext } from "../context/films.context";

import Header from "../components/header";

function Home(props) {
  console.log(props);
  const { state, getFilms } = useContext(FilmsContext);

  useEffect(() => {
    getFilms();
    // setFilms(films);
    // console.log(films)
  }, []);

  return (
    <div>
      <Header />
      Films: {state.length}
    </div>
  );
}

export default Home;
