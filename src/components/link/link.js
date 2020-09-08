import React from "react";
import { Link } from "react-router-dom";

import "./link.css";

export default function LinkItem({ children, to, className }) {
  if (to.includes("http") || to.includes("https")) {
    return (
      <a className={`link-item ${className}`} href={to} target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={`link-item ${className}`} to={to}>
      {children}
    </Link>
  );
}
