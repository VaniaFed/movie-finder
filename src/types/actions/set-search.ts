import { SET_SEARCH_VALUE } from 'constants.ts';

export interface SetSearchAction {
    type: typeof SET_SEARCH_VALUE;
    payload: {
        search: string;
    };
}
