import {
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';
import { ControlsData, MovieType } from 'types/index';
import { FetchMoviesAction } from 'types/actions';

export const fetchMoviesByGenreRequest = (
    data: ControlsData
): FetchMoviesAction => {
    const { search, searchFilter, sortFilter } = data;
    return {
        type: FETCH_MOVIES_BY_GENRE_REQUEST,
        payload: {
            data: {
                search,
                searchBy: searchFilter,
                sortBy: sortFilter,
                sortOrder: 'desc'
            }
        }
    };
};
export const fetchMoviesByGenreSuccess = (
    movies: MovieType[]
): FetchMoviesAction => ({
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    payload: {
        movies
    }
});
export const fetchMoviesByGenreError = (
    message: string
): FetchMoviesAction => ({
    type: FETCH_MOVIES_BY_GENRE_ERROR,
    payload: {
        message
    }
});
