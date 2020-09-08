import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import Header from "./header.js";
import Search from "../search";

import { Provider as FilmsProvider } from "../../context/films.context";

describe("Header", () => {
  configure({ adapter: new Adapter() });

  test("Header renders title instead of search input", () => {
    const contextValue = { currentFilm: { title: "Test title" } };

    const wrapper = mount(
      <FilmsProvider value={contextValue}>
        <Router>
          <Header title="Test title" detailsView backLink="/" />
        </Router>
      </FilmsProvider>
    );
    const h1 = wrapper.find("h1");

    expect(h1.text()).toBe("Test title");
  });

  test("Header renders search input", () => {
    const contextValue = {};

    const wrapper = mount(
      <FilmsProvider value={contextValue}>
        <Router>
          <Header />
        </Router>
      </FilmsProvider>
    );

    expect(wrapper.find(".input-container").exists()).toBe(true);
  });
});
