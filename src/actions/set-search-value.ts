import { SET_SEARCH_VALUE } from 'constants.js';
import { SetSearchValueAction } from 'types/actions';
import { ControlsData } from 'types/index';

export const setSearchValue = (
    search: keyof ControlsData
): SetSearchValueAction => ({
    type: SET_SEARCH_VALUE,
    payload: {
        search
    }
});
