import { put, call, takeEvery } from 'redux-saga/effects';
import {
    fetchMoviesByDataSuccess,
    fetchMoviesByDataError
} from 'actions/movies-by-data';
import { FETCH_MOVIES_BY_DATA_REQUEST } from 'constants.js';
import { request } from 'src/utils/request';

export function* fetchMoviesByData({ payload }) {
    const { searchValue, searchBy, sortBy } = payload;
    const url = `http://react-cdp-api.herokuapp.com/movies?search=${searchValue}&searchBy=${searchBy}&sortBy=${sortBy}`;
    try {
        const response = yield call(request, url);
        const movies = response.data;
        yield put(fetchMoviesByDataSuccess(movies));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(fetchMoviesByDataError(message));
    }
}

export function* watchFetchMoviesByData() {
    yield takeEvery(FETCH_MOVIES_BY_DATA_REQUEST, fetchMoviesByData);
}
