import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.js';

export const fetchMovieByIdRequest = id => {
    return {
        type: FETCH_MOVIE_BY_ID_REQUEST,
        payload: {
            id
        }
    };
};
export const fetchMovieByIdSuccess = movie => ({
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload: {
        movie
    }
});
export const fetchMovieByIdError = message => ({
    type: FETCH_MOVIE_BY_ID_ERROR,
    payload: {
        message
    }
});
