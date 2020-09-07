import React from "react";

import "./search.css";

import SearchIcon from "../../assets/search.svg";

export default function Search({ className, value, setValue, placeholder }) {
  return (
    <div className={`input-container ${className}`}>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <SearchIcon className="input-icon" width="20px" height="20px" />
    </div>
  );
}
