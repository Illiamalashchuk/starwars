import React, { useLayoutEffect, useState, useContext } from "react";

import { Context as FilmsContext } from "../context/films.context";

import Header from "../components/header";
import Film from "../components/film";
import Loader from "../components/loader";

import "./screens.css";

export default function Home({ match }) {
  const {
    state: { films, isLoading, errorMessage },
    getFilms,
  } = useContext(FilmsContext);

  useLayoutEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="screen-container">
      <Header />
      {isLoading ? (
        <div className="loader-block loader-container">
          <Loader />
        </div>
      ) : (
        <div className="films-container">
          {films?.length > 0 ? (
            films.map((film, index) => (
              <React.Fragment key={film.episode_id}>
                <Film film={film} index={index} />
              </React.Fragment>
            ))
          ) : (
            <p className="no-message">No films found</p>
          )}
          {errorMessage ? (
            <p className="no-message error-message">{errorMessage}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
