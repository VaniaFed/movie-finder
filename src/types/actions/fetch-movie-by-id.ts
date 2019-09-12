import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.js';
import { MovieType } from 'types/index';

interface FetchMovieByIdRequest {
    type: typeof FETCH_MOVIE_BY_ID_REQUEST;
    payload: {
        id: number;
    };
}

interface FetchMovieByIdSuccess {
    type: typeof FETCH_MOVIE_BY_ID_SUCCESS;
    payload: {
        movie: MovieType;
    };
}

interface FetchMovieByIdError {
    type: typeof FETCH_MOVIE_BY_ID_ERROR;
    payload: {
        message: string;
    };
}

export type FetchMovieByIdAction =
    | FetchMovieByIdRequest
    | FetchMovieByIdSuccess
    | FetchMovieByIdError;
