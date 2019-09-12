import { SET_SEARCH_VALUE } from 'constants.js';
import { SetSearchAction } from 'types/actions';
import { ControlsData } from 'types/index';

export const setSearch = (
    search: keyof ControlsData
): SetSearchAction => ({
    type: SET_SEARCH_VALUE,
    payload: {
        search
    }
});
