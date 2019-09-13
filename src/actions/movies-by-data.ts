import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR
} from 'constants.js';
import { ControlsData, MovieType } from 'types/index';
import {
    FetchMoviesRequest,
    FetchMoviesSuccess,
    FetchMoviesError
} from 'types/actions';

export const fetchMoviesByDataRequest = (
    data: ControlsData
): FetchMoviesRequest => {
    return {
        type: FETCH_MOVIES_BY_DATA_REQUEST,
        payload: {
            data: {
                ...data,
                sortOrder: 'desc'
            }
        }
    };
};

export const fetchMoviesByDataSuccess = (
    movies: MovieType[]
): FetchMoviesSuccess => ({
    type: FETCH_MOVIES_BY_DATA_SUCCESS,
    payload: {
        movies
    }
});

export const fetchMoviesByDataError = (message: string): FetchMoviesError => ({
    type: FETCH_MOVIES_BY_DATA_ERROR,
    payload: {
        message
    }
});
