import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.js';
import { FetchMovieByIdAction } from 'types/actions';
import { MovieType } from 'types/index';

export const fetchMovieByIdRequest = (id: number): FetchMovieByIdAction => {
    return {
        type: FETCH_MOVIE_BY_ID_REQUEST,
        payload: {
            id
        }
    };
};

export const fetchMovieByIdSuccess = (
    movie: MovieType
): FetchMovieByIdAction => ({
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload: {
        movie
    }
});

export const fetchMovieByIdError = (message: string): FetchMovieByIdAction => ({
    type: FETCH_MOVIE_BY_ID_ERROR,
    payload: {
        message
    }
});
