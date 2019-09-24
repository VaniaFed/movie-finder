import {
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.ts';
import { ControlsData, MovieType } from 'types/index';
import {
    FetchMoviesRequest,
    FetchMoviesSuccess,
    FetchMoviesError
} from 'types/actions';

export const fetchMoviesByGenreRequest = (
    data: ControlsData
): FetchMoviesRequest => {
    return {
        type: FETCH_MOVIES_BY_GENRE_REQUEST,
        payload: {
            data: {
                ...data,
                sortOrder: 'desc'
            }
        }
    };
};

export const fetchMoviesByGenreSuccess = (
    movies: MovieType[]
): FetchMoviesSuccess => ({
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    payload: {
        movies
    }
});

export const fetchMoviesByGenreError = (message: string): FetchMoviesError => ({
    type: FETCH_MOVIES_BY_GENRE_ERROR,
    payload: {
        message
    }
});
