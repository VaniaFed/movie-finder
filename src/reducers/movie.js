import {
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR
} from 'constants.js';

export const movie = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case FETCH_MOVIE_BY_ID_SUCCESS: {
            return { movie: action.payload.movie };
        }
        case FETCH_MOVIE_BY_ID_ERROR: {
            return {
                error: action.payload.message
            };
        }
        default:
            return state;
    }
};
