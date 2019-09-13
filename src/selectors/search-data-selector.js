import { createSelector } from 'reselect';
import { searchSelector } from './search-selector';
import { searchBySelector } from './search-by-selector';
import { sortBySelector } from './sort-by-selector';

export const searchDataSelector = createSelector(
    searchSelector,
    searchBySelector,
    sortBySelector,
    (search, searchBy, sortBy) => ({
        search,
        searchBy,
        sortBy
    })
);
