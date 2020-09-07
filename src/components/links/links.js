import React from "react";

import "./links.css";

import Facebook from "../../assets/facebook.svg";

export default function Links({ className }) {
  return (
    <div className={`links-container ${className}`}>
      <Facebook width="25px" height="25px" />
    </div>
  );
}
