import { Map } from 'immutable';
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

const initialState = Map({
    current: {},
    list: [],
    sameGenreList: [],
    error: '',
    search: '',
    searchBy: 'title',
    sortBy: 'release_date'
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
        case SET_SEARCH_VALUE: {
            return state.setIn(['search'], action.payload.search);
        }
        case SEARCH_FILTER: {
            return state.setIn(['searchBy'], action.payload.searchBy);
        }
        case SORT_FILTER: {
            return state.setIn(['sortBy'], action.payload.sortBy);
        }
        default:
            return state;
    }
};
