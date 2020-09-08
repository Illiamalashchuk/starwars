import React, { useState, useContext } from "react";

import { Context as FilmsContext } from "../../context/films.context";

import Link from "../link";
import Links from "../links";
import Search from "../search";

import logo from "../../assets/logo.png";
import "./film.css";

function getDate(date) {
  const dateObj = new Date(date);
  var dd = dateObj.getDate();
  var mm = dateObj.getMonth() + 1;
  var yyyy = dateObj.getFullYear();

  return `${mm} / ${dd} / ${yyyy}`;
}

export default function Film({ index, film, detailsView }) {
  const { title, opening_crawl, director, release_date } = film;

  const date = getDate(release_date);

  return (
    <div className="film-container">
      <h2 className="film-reg-text">{film.title}</h2>

      <h4 className="film-reg-text">Release date:</h4>
      <p className="film-reg-text">{date}</p>

      <h4 className="film-reg-text">Directed by:</h4>
      <p className="film-reg-text">{film.director}</p>

      {!detailsView ? null : (
        <>
          <h4 className="film-reg-text">Producer:</h4>
          <p className="film-reg-text">{film.producer}</p>
        </>
      )}

      <h4 className="film-reg-text">Opening crawl</h4>
      <p className="film-reg-text">{film.opening_crawl}</p>

      {!detailsView ? null : (
        <div>
          <h4>Characters:</h4>
          <div>
            {film?.characters?.map((el, i) => (
              <span key={el.name}>
                {el.name}
                {film.characters.length - 1 === i ? "" : ", "}
              </span>
            ))}
          </div>
        </div>
      )}

      {detailsView ? null : (
        <Link className="film-more-info" to={`/films/${index + 1}/details`}>
          Click here to see more
        </Link>
      )}
    </div>
  );
}
