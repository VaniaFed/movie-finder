import { SORT_FILTER } from 'constants.ts';
import { SortBy } from 'types/index';

export interface SetSortByAction {
    type: typeof SORT_FILTER;
    payload: {
        sortBy: SortBy;
    };
}
