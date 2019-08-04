import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from 'constants.js';

export const movies = (state = [], action) => {
    const { type } = action;
    switch (type) {
        case FETCH_MOVIES_SUCCESS: {
            return [...action.movies];
        }
        case FETCH_MOVIES_ERROR: {
            return [...state, action.message];
        }
        default:
            return state;
    }
};
