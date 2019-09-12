import { SEARCH_FILTER } from 'constants.js';
import { SetSearchByAction } from 'types/actions';
import { ControlsData } from 'types/index';

export const setSearchBy = (
    searchBy: keyof ControlsData
): SetSearchByAction => ({
    type: SEARCH_FILTER,
    payload: {
        searchBy
    }
});
