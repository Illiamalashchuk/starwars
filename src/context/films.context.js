import createDataContext from './createDataContext'
import server from '../api/server';

const filmsReducer = (state, action) => {
  switch (action.type) {
    case 'get_films':
      return action.payload;
    default:
     return state;
  }
}

const getFilms = (dispatch) => {
  return async () => {
    const results = await server.get('/films');
    const { data } = results;

    dispatch({ type: 'get_films', payload: data.results  });
  }
}

export const { Context, Provider } = createDataContext(
  filmsReducer, 
  { getFilms },
  []
);
