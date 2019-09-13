import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.js';
import { MovieType } from 'types/index';

export interface FetchMovieByIdRequest {
    type: typeof FETCH_MOVIE_BY_ID_REQUEST;
    payload: {
        id: number;
    };
}

export interface FetchMovieByIdSuccess {
    type: typeof FETCH_MOVIE_BY_ID_SUCCESS;
    payload: {
        movie: MovieType;
    };
}

export interface FetchMovieByIdError {
    type: typeof FETCH_MOVIE_BY_ID_ERROR;
    payload: {
        message: string;
    };
}
