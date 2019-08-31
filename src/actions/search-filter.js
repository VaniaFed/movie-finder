import { SEARCH_FILTER } from 'constants.js';

export const searchFilter = searchBy => ({
    type: SEARCH_FILTER,
    payload: {
        searchBy
    }
});
