import { SET_SEARCH_VALUE } from 'constants.ts';
import { SetSearchAction } from 'types/actions';

export const setSearch = (search: string): SetSearchAction => ({
    type: SET_SEARCH_VALUE,
    payload: {
        search
    }
});
