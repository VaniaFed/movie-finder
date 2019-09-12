import { SEARCH_FILTER } from 'constants.js';
import { ControlsData } from 'types/index';

export interface SetSearchByAction {
    type: typeof SEARCH_FILTER;
    payload: {
        searchBy: keyof ControlsData;
    };
}
