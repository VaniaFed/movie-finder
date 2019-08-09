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

import { searchFilter } from 'actions/search-filter';
import { sortFilter } from 'actions/sort-filter';

export const actions = {
    fetchMovieByIdRequest,
    fetchMovieByIdSuccess,
    fetchMovieByIdError,

    fetchMoviesByDataRequest,
    fetchMoviesByDataSuccess,
    fetchMoviesByDataError,

    searchFilter,

    sortFilter
};
