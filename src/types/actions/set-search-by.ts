import { SEARCH_FILTER } from 'constants.ts';
import { SearchBy } from 'types/index';

export interface SetSearchByAction {
    type: typeof SEARCH_FILTER;
    payload: {
        searchBy: SearchBy;
    };
}
