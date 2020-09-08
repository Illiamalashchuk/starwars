import React, { useLayoutEffect, useContext } from "react";

import { Context as FilmsContext } from "../context/films.context";

import Header from "../components/header";
import Film from "../components/film";
import Loader from "../components/loader";

import "./screens.css";

function Details({ match }) {
  const {
    state: { currentFilm, isLoading, errorMessage },
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
      <Header title={currentFilm?.title} backLink="/" detailsView />
      <div className="films-container">
        {errorMessage ? (
          <p className="no-message error-message">{errorMessage}</p>
        ) : (
          currentFilm && <Film film={currentFilm} detailsView />
        )}
      </div>
    </div>
  );
}

export default Details;
