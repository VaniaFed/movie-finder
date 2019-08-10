import {
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';

export const fetchMoviesByGenreRequest = (
    search,
    searchBy = 'title',
    sortBy = 'rating'
) => {
    return {
        type: FETCH_MOVIES_BY_GENRE_REQUEST,
        payload: {
            search,
            searchBy,
            sortBy,
            sortOrder: 'desc'
        }
    };
};
export const fetchMoviesByGenreSuccess = movies => ({
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    payload: {
        movies
    }
});
export const fetchMoviesByGenreError = message => ({
    type: FETCH_MOVIES_BY_GENRE_ERROR,
    payload: {
        message
    }
});
