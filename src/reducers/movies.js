import {
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';

export const movies = (state = [], action) => {
    const { type } = action;
    switch (type) {
        case FETCH_MOVIES_BY_DATA_SUCCESS: {
            return [...action.payload.movies];
        }
        case FETCH_MOVIES_BY_DATA_ERROR: {
            return {
                error: action.payload.message
            };
        }
        case FETCH_MOVIES_BY_GENRE_SUCCESS: {
            return [...action.payload.movies];
        }
        case FETCH_MOVIES_BY_GENRE_ERROR: {
            return {
                error: action.payload.message
            };
        }
        default:
            return state;
    }
};
