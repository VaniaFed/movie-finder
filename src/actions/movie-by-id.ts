import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.ts';
import {
    FetchMovieByIdRequest,
    FetchMovieByIdSuccess,
    FetchMovieByIdError
} from 'types/actions';
import { MovieType } from 'types/index';

export const fetchMovieByIdRequest = (id: string): FetchMovieByIdRequest => {
    return {
        type: FETCH_MOVIE_BY_ID_REQUEST,
        payload: {
            id
        }
    };
};

export const fetchMovieByIdSuccess = (
    movie: MovieType
): FetchMovieByIdSuccess => ({
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload: {
        movie
    }
});

export const fetchMovieByIdError = (message: string): FetchMovieByIdError => ({
    type: FETCH_MOVIE_BY_ID_ERROR,
    payload: {
        message
    }
});
