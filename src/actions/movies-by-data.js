import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR
} from 'constants.js';

export const fetchMoviesByDataRequest = (
    search,
    searchBy = 'title',
    sortBy = 'rating'
) => {
    return {
        type: FETCH_MOVIES_BY_DATA_REQUEST,
        payload: {
            search,
            searchBy,
            sortBy,
            sortOrder: 'desc'
        }
    };
};
export const fetchMoviesByDataSuccess = movies => ({
    type: FETCH_MOVIES_BY_DATA_SUCCESS,
    payload: {
        movies
    }
});
export const fetchMoviesByDataError = message => ({
    type: FETCH_MOVIES_BY_DATA_ERROR,
    payload: {
        message
    }
});
