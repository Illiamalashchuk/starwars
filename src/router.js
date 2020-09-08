import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { routes } from "./routes.js";

import "./index.css";

export default function Routes() {
  return (
    <Router history={createBrowserHistory}>
      <div className="root">
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </div>
    </Router>
  );
}
