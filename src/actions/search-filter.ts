import { SEARCH_FILTER } from 'constants.js';
import { SetSearchFilterAction } from 'types/actions';
import { ControlsData } from 'types/index';

// TODO: replace SEARCH_FILTER with SET_SEARCH_BY
export const searchFilter = (
    searchBy: keyof ControlsData
): SetSearchFilterAction => ({
    type: SEARCH_FILTER,
    payload: {
        searchBy
    }
});
