import {
    fetchMovieByIdRequest,
    fetchMovieByIdSuccess,
    fetchMovieByIdError
} from 'actions/movie-by-id';
import {
    fetchMoviesByDataRequest,
    fetchMoviesByDataSuccess,
    fetchMoviesByDataError
} from 'actions/movies-by-data';
import {
    fetchMoviesByGenreRequest,
    fetchMoviesByGenreSuccess,
    fetchMoviesByGenreError
} from 'actions/movies-by-genre';
import { searchFilter } from 'actions/search-filter';
import { sortFilter } from 'actions/sort-filter';
import { setSearchValue } from 'actions/set-search-value';

export const actions = {
    fetchMovieByIdRequest,
    fetchMovieByIdSuccess,
    fetchMovieByIdError,

    fetchMoviesByDataRequest,
    fetchMoviesByDataSuccess,
    fetchMoviesByDataError,

    fetchMoviesByGenreRequest,
    fetchMoviesByGenreSuccess,
    fetchMoviesByGenreError,

    searchFilter,

    sortFilter,

    setSearchValue
};
