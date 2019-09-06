import { createSelector } from 'reselect';
import { searchValueSelector } from './search-value-selector';
import { searchFilterSelector } from './search-filter-selector';
import { sortFilterSelector } from './sort-filter-selector';

export const searchDataSelector = createSelector(
    searchValueSelector,
    searchFilterSelector,
    sortFilterSelector,
    (searchValue, searchFilter, sortFilter) => ({
        search: searchValue,
        searchFilter,
        sortFilter
    })
);
