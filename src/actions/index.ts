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
import { setSearchBy } from 'actions/set-search-by';
import { setSortBy } from 'actions/set-sort-by';
import { setSearch } from 'actions/set-search';

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

    setSearchBy,

    setSortBy,

    setSearch
};
