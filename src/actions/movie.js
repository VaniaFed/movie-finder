import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from 'constants.js';

export const fetchMoviesRequest = () => ({
    type: FETCH_MOVIES_REQUEST
});
export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    movies
});
export const fetchMoviesError = message => ({
    type: FETCH_MOVIES_ERROR,
    message
});
