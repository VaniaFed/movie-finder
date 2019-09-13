import { SORT_FILTER } from 'constants.js';
import { SetSortByAction } from 'types/actions';
import { ControlsData } from 'types/index';

export const setSortBy = (sortBy: keyof ControlsData): SetSortByAction => ({
    type: SORT_FILTER,
    payload: {
        sortBy
    }
});
