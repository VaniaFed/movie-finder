import {
    FETCH_MOVIES_BY_DATA_REQUEST,
    FETCH_MOVIES_BY_DATA_SUCCESS,
    FETCH_MOVIES_BY_DATA_ERROR
} from 'constants.js';
import { ControlsData } from 'types/index';

export const fetchMoviesByDataRequest = (data: ControlsData) => {
    const { search, searchFilter, sortFilter } = data;
    return {
        type: FETCH_MOVIES_BY_DATA_REQUEST,
        payload: {
            data: {
                search,
                searchBy: searchFilter,
                sortBy: sortFilter,
                sortOrder: 'desc'
            }
        }
    };
};
export const fetchMoviesByDataSuccess = movies => ({
    type: FETCH_MOVIES_BY_DATA_SUCCESS,
    payload: {
        movies
    }
});
export const fetchMoviesByDataError = message => ({
    type: FETCH_MOVIES_BY_DATA_ERROR,
    payload: {
        message
    }
});
