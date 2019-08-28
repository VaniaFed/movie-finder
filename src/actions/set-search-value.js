import { SET_SEARCH_VALUE } from 'constants.js';

export const setSearchValue = search => ({
    type: SET_SEARCH_VALUE,
    payload: {
        search
    }
});
