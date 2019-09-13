import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR
} from 'constants.js';
import { ControlsData, MovieType } from 'types/index';
import { FetchMoviesAction } from 'types/actions';

export const fetchMoviesByDataRequest = (
    data: ControlsData
): FetchMoviesAction => {
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
): FetchMoviesAction => ({
    type: FETCH_MOVIES_BY_DATA_SUCCESS,
    payload: {
        movies
    }
});

export const fetchMoviesByDataError = (message: string): FetchMoviesAction => ({
    type: FETCH_MOVIES_BY_DATA_ERROR,
    payload: {
        message
    }
});
