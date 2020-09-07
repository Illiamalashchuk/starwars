import React, { useState, useContext } from "react";

import { Context as FilmsContext } from "../../context/films.context";

import Links from "../links";
import Search from "../search";

import logo from "../../assets/logo.png";
import "./header.css";

export default function Header() {
  const [value, setValue] = useState("");

  const { state, getFilms } = useContext(FilmsContext);

  return (
    <div className="header-container">
      <Links className="header-links" />
      <img className="header-logo" src={logo} alt="logo" />
      <Search
        className="header-search"
        placeholder="Enter film title"
        value={value}
        setValue={(text) => {
          setValue(text);
          getFilms(text);
        }}
      />
    </div>
  );
}
