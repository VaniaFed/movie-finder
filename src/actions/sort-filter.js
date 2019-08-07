import { SORT_FILTER } from 'constants.js';

export const sortFilter = sortBy => ({
    type: SORT_FILTER,
    payload: {
        sortBy
    }
});
