import React, { useLayoutEffect, useContext } from "react";

import { Context as FilmsContext } from "../context/films.context";

import Header from "../components/header";
import Film from "../components/film";
import Loader from "../components/loader";

import "./screens.css";

function Details(props) {
  const { match } = props;
  const {
    state: { currentFilm, isLoading },
    getFilm,
  } = useContext(FilmsContext);

  useLayoutEffect(() => {
    getFilm(match.params.filmId);
  }, []);

  if (isLoading) {
    return (
      <div className="screen-container loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="screen-container">
      <Header title={currentFilm?.title} backLink="/" />
      <div className="films-container">
        {currentFilm && <Film film={currentFilm} detailsView />}
      </div>
    </div>
  );
}

export default Details;
