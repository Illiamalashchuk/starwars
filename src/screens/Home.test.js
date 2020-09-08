import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import Home from "./Home.js";

import { Provider as FilmsProvider } from "../context/films.context";

describe("Home", () => {
  configure({ adapter: new Adapter() });

  test("Screen renders loader", () => {
    const contextValue = {
      films: [],
      currentFilm: null,
      isLoading: false,
      errorMessage: "",
    };

    const wrapper = mount(
      <FilmsProvider value={contextValue}>
        <Router>
          <Home />
        </Router>
      </FilmsProvider>
    );

    const container = wrapper.find(".loader-container");

    expect(container.exists()).toBe(true);
  });
});
