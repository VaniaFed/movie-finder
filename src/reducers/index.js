import { combineReducers } from 'redux';
import { moviesByData } from 'reducers/movies-by-data';
import { movie } from 'reducers/movie-by-id';

// export const rootReducer = movie;
export const rootReducer = combineReducers({
    movie,
    moviesByData
});
