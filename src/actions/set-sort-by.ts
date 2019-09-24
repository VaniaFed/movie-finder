import { SORT_FILTER } from 'constants.ts';
import { SetSortByAction } from 'types/actions';
import { SortBy } from 'types/index';

export const setSortBy = (sortBy: SortBy): SetSortByAction => ({
    type: SORT_FILTER,
    payload: {
        sortBy
    }
});
