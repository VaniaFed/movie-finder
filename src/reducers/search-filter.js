import { SEARCH_FILTER } from 'constants.js';

export const searchFilter = (state = 'title', action) => {
    switch (action.type) {
        case SEARCH_FILTER: {
            return action.payload.searchBy;
        }
        default:
            return state;
    }
};
