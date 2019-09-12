import { SET_SEARCH_VALUE } from 'constants.js';
import { ControlsData } from 'types/index';

export interface SetSearchValueAction {
    type: typeof SET_SEARCH_VALUE;
    payload: {
        search: keyof ControlsData;
    };
}
