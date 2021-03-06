import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR,
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.ts';
import { MovieType } from 'types/index';
import { ControlsData } from '../controls-data';

export interface FetchMoviesRequest {
    type:
        | typeof FETCH_MOVIES_BY_DATA_REQUEST
        | typeof FETCH_MOVIES_BY_GENRE_REQUEST;
    payload: {
        data: ControlsData;
    };
}

export interface FetchMoviesSuccess {
    type:
        | typeof FETCH_MOVIES_BY_DATA_SUCCESS
        | typeof FETCH_MOVIES_BY_GENRE_SUCCESS;
    payload: {
        movies: MovieType[];
    };
}

export interface FetchMoviesError {
    type:
        | typeof FETCH_MOVIES_BY_DATA_ERROR
        | typeof FETCH_MOVIES_BY_GENRE_ERROR;
    payload: {
        message: string;
    };
}
