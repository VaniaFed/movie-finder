import {
    FETCH_MOVIES_BY_GENRE_REQUEST,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';

export const fetchMoviesByGenreRequest = genre => {
    return {
        type: FETCH_MOVIES_BY_GENRE_REQUEST,
        payload: {
            genre
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
