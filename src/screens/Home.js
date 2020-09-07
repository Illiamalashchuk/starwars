import React, { useEffect, useState, useContext } from "react";

import { Context as FilmsContext } from "../context/films.context";

import Header from "../components/header";

function Home(props) {
  console.log(props);
  const { state, getFilms } = useContext(FilmsContext);

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="screen-container">
      <Header />
      <div style={{ color: "#fff" }}>Films: {state.length}</div>
    </div>
  );
}

export default Home;
