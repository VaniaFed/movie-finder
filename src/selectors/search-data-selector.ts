import { createSelector } from 'reselect';
import { SearchBy, SortBy, ControlsData } from 'types/index';
import { searchSelector } from './search-selector';
import { searchBySelector } from './search-by-selector';
import { sortBySelector } from './sort-by-selector';

export const searchDataSelector = createSelector(
    searchSelector,
    searchBySelector,
    sortBySelector,
    (search: string, searchBy: SearchBy, sortBy: SortBy): ControlsData => ({
        search,
        searchBy,
        sortBy
    })
);
