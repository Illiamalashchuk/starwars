import React from "react";

import Link from "../link";

import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Youtube from "../../assets/youtube.svg";

import "./links.css";

export default function Links({ className }) {
  return (
    <div className={`links-container ${className}`}>
      <Link className="social-link" to="https://www.facebook.com/StarWars">
        <Facebook width="25px" height="25px" />
      </Link>
      <Link className="social-link" to="https://www.instagram.com/starwars/">
        <Instagram width="25px" height="25px" />
      </Link>
      <Link className="social-link" to="https://www.youtube.com/user/starwars">
        <Youtube width="30px" height="25px" />
      </Link>
    </div>
  );
}
