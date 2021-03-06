/* eslint-disable no-param-reassign */
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
} from 'constants.ts';
import { MovieState } from 'types/index';
import {
    FetchMovieByIdSuccess,
    FetchMovieByIdError,
    FetchMoviesRequest,
    FetchMoviesSuccess,
    FetchMoviesError,
    SetSearchAction,
    SetSearchByAction,
    SetSortByAction
} from 'types/actions';

type Action =
    | FetchMovieByIdSuccess
    | FetchMovieByIdError
    | FetchMoviesRequest
    | FetchMoviesSuccess
    | FetchMoviesError
    | SetSearchAction
    | SetSearchByAction
    | SetSortByAction;

const initialState: MovieState = {
    list: [],
    sameGenreList: [],
    error: '',
    search: '',
    searchBy: 'title',
    sortBy: 'release_date'
};

export const movie = (state = initialState, action: Action): MovieState => {
    return produce(state, draft => {
        switch (action.type) {
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
