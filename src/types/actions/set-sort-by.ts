import { SORT_FILTER } from 'constants.js';
import { ControlsData } from 'types/index';

export interface SetSortByAction {
    type: typeof SORT_FILTER;
    payload: {
        sortBy: keyof ControlsData;
    };
}
