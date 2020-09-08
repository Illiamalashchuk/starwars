import createDataContext from "./createDataContext";

import axios from "axios";

const server = axios.create();

const filmsReducer = (state, action) => {
  switch (action.type) {
    case "get_films":
      return { ...state, films: action.payload, currentFilm: null };
    case "get_film":
      return { ...state, ...action.payload };
    case "set_loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const getFilms = (dispatch) => {
  return async (value) => {
    dispatch({ type: "set_loading", payload: true });
    const results = await server.get("http://swapi.dev/api/films");
    const { data } = results;

    dispatch({
      type: "get_films",
      payload: data.results.filter((el) =>
        value ? el.title.toLowerCase().includes(value) : true
      ),
    });
    dispatch({ type: "set_loading", payload: false });
  };
};

const getCharacter = async (link) => {
  return await server.get(link);
};

const getFilm = (dispatch) => {
  return async (filmId) => {
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
  };
};

export const { Context, Provider } = createDataContext(
  filmsReducer,
  { getFilms, getFilm },
  [{ films: [], currentFilm: null, isLoading: false }]
);
