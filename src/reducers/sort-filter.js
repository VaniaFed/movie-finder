import { SORT_FILTER } from 'constants.js';

export const sortFilter = (state = 'release_date', action) => {
    switch (action.type) {
        case SORT_FILTER: {
            return action.payload.sortBy;
        }
        default:
            return state;
    }
};
