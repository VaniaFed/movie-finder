import { SET_SEARCH_VALUE } from 'constants.js';

export const setSearchValue = searchValue => ({
    type: SET_SEARCH_VALUE,
    payload: {
        searchValue
    }
});
