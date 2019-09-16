import { SORT_FILTER } from 'constants.ts';
import { ControlsData } from 'types/index';

export interface SetSortByAction {
    type: typeof SORT_FILTER;
    payload: {
        sortBy: keyof ControlsData;
    };
}
