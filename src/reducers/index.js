import { combineReducers } from 'redux';
import { moviesByGenre } from 'reducers/movies';
import { movie } from 'reducers/movie-by-id';

export const rootReducer = movie;
// export const rootReducer = combineReducers({ movie, moviesByGenre });
