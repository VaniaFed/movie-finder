import produce from 'immer';
import {
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR,
    SEARCH_FILTER,
    SORT_FILTER,
    SET_SEARCH_VALUE
} from 'constants.js';
import { MovieState } from 'types/index';

// TODO: add type for action

const initialState: MovieState = {
    current: {},
    list: [],
    sameGenreList: [],
    error: '',
    search: '',
    searchBy: 'title',
    sortBy: 'release_date'
};

export const movie = (state = initialState, action): MovieState => {
    const { type } = action;
    return produce(state, draft => {
        switch (type) {
            case FETCH_MOVIE_BY_ID_SUCCESS: {
                draft.current = action.payload.movie;
                break;
            }
            case FETCH_MOVIE_BY_ID_ERROR: {
                draft.error = action.payload.message;
                break;
            }
            case FETCH_MOVIES_BY_DATA_SUCCESS: {
                draft.list = action.payload.movies;
                break;
            }
            case FETCH_MOVIES_BY_DATA_ERROR: {
                draft.error = action.payload.message;
                break;
            }
            case FETCH_MOVIES_BY_GENRE_SUCCESS: {
                draft.sameGenreList = action.payload.movies;
                break;
            }
            case FETCH_MOVIES_BY_GENRE_ERROR: {
                draft.error = action.payload.message;
                break;
            }
            case SET_SEARCH_VALUE: {
                draft.search = action.payload.search;
                break;
            }
            case SEARCH_FILTER: {
                draft.searchBy = action.payload.searchBy;
                break;
            }
            case SORT_FILTER: {
                draft.sortBy = action.payload.sortBy;
                break;
            }
            default: {
                break;
            }
        }
    });
};
