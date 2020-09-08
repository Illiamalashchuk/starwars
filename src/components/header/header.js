import React, { useState, useContext } from "react";

import { Context as FilmsContext } from "../../context/films.context";

import Links from "../links";
import Link from "../link";
import Search from "../search";

import Left from "../../assets/left.svg";
import Logo from "../../assets/logo.png";

import "./header.css";

export default function Header({ detailsView, title, backLink }) {
  const [value, setValue] = useState("");

  const { state, getFilms } = useContext(FilmsContext);

  return (
    <div className="header-container">
      {backLink ? (
        <Link className="header-back-link" to={backLink}>
          <Left width="50px" height="50px" />
        </Link>
      ) : null}
      <Links className="header-links" />
      <Link className="header-logo" to="/">
        <img className="header-logo__img" src={Logo} alt="logo" />
      </Link>
      {title || detailsView ? (
        <h1 className="header-search header-title">{title}</h1>
      ) : (
        <Search
          className="header-search"
          placeholder="Enter film title"
          value={value}
          setValue={(text) => {
            setValue(text);
            getFilms(text);
          }}
        />
      )}
    </div>
  );
}
