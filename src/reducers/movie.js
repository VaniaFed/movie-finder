import { Map } from 'immutable';
import {
    FETCH_MOVIE_BY_ID_SUCCESS,
    FETCH_MOVIE_BY_ID_ERROR,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR,
    FETCH_MOVIES_BY_GENRE_SUCCESS,
    FETCH_MOVIES_BY_GENRE_ERROR,
    SEARCH_FILTER,
    SORT_FILTER
} from 'constants.js';

const initialState = Map({
    current: {},
    list: [],
    sameGenreList: [],
    error: '',
    searchFilter: 'title',
    sortFilter: 'release_date'
});

export const movie = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case FETCH_MOVIE_BY_ID_SUCCESS: {
            return state.setIn(['current'], action.payload.movie);
        }
        case FETCH_MOVIE_BY_ID_ERROR: {
            return state.setIn(['error'], action.payload.message);
        }
        case FETCH_MOVIES_BY_DATA_SUCCESS: {
            return state.setIn(['list'], action.payload.movies);
        }
        case FETCH_MOVIES_BY_DATA_ERROR: {
            return state.setIn(['error'], action.payload.message);
        }
        case FETCH_MOVIES_BY_GENRE_SUCCESS: {
            return state.setIn(['sameGenreList'], action.payload.movies);
        }
        case FETCH_MOVIES_BY_GENRE_ERROR: {
            return state.setIn(['error'], action.payload.message);
        }
        case SEARCH_FILTER: {
            return state.setIn(['searchFilter'], action.payload.searchBy);
        }
        case SORT_FILTER: {
            return state.setIn(['sortFilter'], action.payload.sortBy);
        }
        default:
            return state;
    }
};
