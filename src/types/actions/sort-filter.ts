import { SORT_FILTER } from 'constants.js';
import { ControlsData } from 'types/index';

export interface SetSortFilterAction {
    type: typeof SORT_FILTER;
    payload: {
        sortBy: keyof ControlsData;
    };
}
