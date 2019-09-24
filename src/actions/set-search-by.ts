import { SEARCH_FILTER } from 'constants.ts';
import { SetSearchByAction } from 'types/actions';
import { SearchBy } from 'types/index';

export const setSearchBy = (searchBy: SearchBy): SetSearchByAction => ({
    type: SEARCH_FILTER,
    payload: {
        searchBy
    }
});
