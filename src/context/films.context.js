import createDataContext from "./createDataContext";

import axios from "axios";

const server = axios.create();

const filmsReducer = (state, action) => {
  switch (action.type) {
    case "get_films":
      return {
        ...state,
        films: action.payload,
        currentFilm: null,
        errorMessage: "",
        filterValue: "",
      };

    case "get_film":
      return { ...state, ...action.payload, errorMessage: "", filterValue: "" };

    case "set_filter_value":
      return { ...state, filterValue: action.payload, errorMessage: "" };

    case "set_loading":
      return {
        ...state,
        isLoading: action.payload,
        errorMessage: "",
      };

    case "set_error":
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const getFilms = (dispatch) => {
  return async (value) => {
    try {
      dispatch({ type: "set_loading", payload: true });
      const results = await server.get("http://swapi.dev/api/films");
      const { data } = results;

      dispatch({
        type: "get_films",
        payload: data.results,
      });
      dispatch({ type: "set_loading", payload: false });
    } catch (err) {
      console.error(err.message);
      dispatch({ type: "set_loading", payload: false });
      dispatch({ type: "set_error", payload: err.message });
    }
  };
};

const setFilterValue = (dispatch) => {
  return (value) => {
    dispatch({ type: "set_filter_value", payload: value });
  };
};

const getCharacter = async (link) => {
  return await server.get(link);
};

const getFilm = (dispatch) => {
  return async (filmId) => {
    try {
      dispatch({ type: "set_loading", payload: true });
      const results = await server.get(`http://swapi.dev/api/films/${filmId}`);
      const { data } = results;

      const charactersResult = await Promise.all(
        data.characters.map(getCharacter)
      );

      dispatch({
        type: "get_film",
        payload: {
          currentFilm: {
            ...results.data,
            characters: charactersResult.map((el) => el.data),
          },
        },
      });
      dispatch({ type: "set_loading", payload: false });
    } catch (err) {
      console.error(err.message);
      dispatch({ type: "set_loading", payload: false });
      dispatch({ type: "set_error", payload: err.message });
    }
  };
};

export const { Context, Provider } = createDataContext(
  filmsReducer,
  { getFilms, getFilm, setFilterValue },
  {
    films: [],
    currentFilm: null,
    filterValue: "",
    isLoading: false,
    errorMessage: "",
  }
);
