import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR,
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';
import { MovieType } from 'types/index';
import { ControlsData } from '../controls-data';

interface FetchMoviesRequest {
    type:
        | typeof FETCH_MOVIES_BY_DATA_REQUEST
        | typeof FETCH_MOVIES_BY_GENRE_REQUEST;
    payload: {
        data: ControlsData;
    };
}

interface FetchMoviesSuccess {
    type:
        | typeof FETCH_MOVIES_BY_DATA_SUCCESS
        | typeof FETCH_MOVIES_BY_GENRE_SUCCESS;
    payload: {
        movies: MovieType[];
    };
}

interface FetchMoviesError {
    type:
        | typeof FETCH_MOVIES_BY_DATA_ERROR
        | typeof FETCH_MOVIES_BY_GENRE_ERROR;
    payload: {
        message: string;
    };
}

export type FetchMoviesAction =
    | FetchMoviesRequest
    | FetchMoviesSuccess
    | FetchMoviesError;
