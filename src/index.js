import React from "react";
import ReactDOM from "react-dom";

import Routes from "./router";
import { Provider as FilmsProvider } from "./context/films.context.js";

class App extends React.Component {
  render() {
    return (
      <FilmsProvider>
        <Routes />
      </FilmsProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
