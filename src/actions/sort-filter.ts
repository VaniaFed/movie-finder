import { SORT_FILTER } from 'constants.js';
import { SetSortFilterAction } from 'types/actions';
import { ControlsData } from 'types/index';

// TODO: replace SORT_FILTER with SET_SORT_BY
export const sortFilter = (
    sortBy: keyof ControlsData
): SetSortFilterAction => ({
    type: SORT_FILTER,
    payload: {
        sortBy
    }
});
