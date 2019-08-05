import {
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR
} from 'constants.js';

export const movies = (state = [], action) => {
    const { type } = action;
    switch (type) {
        case FETCH_MOVIES_BY_GENRE_SUCCESS: {
            return { ...state, movies: action.payload.movies };
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
