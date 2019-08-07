import { combineReducers } from 'redux';
import { movies } from 'reducers/movies';
import { movie } from 'reducers/movie';
import { searchFilter } from 'reducers/search-filter';
import { sortFilter } from 'reducers/sort-filter';

export const rootReducer = combineReducers({
    movie,
    movies,
    searchFilter,
    sortFilter
});
