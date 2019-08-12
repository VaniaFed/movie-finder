import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_DATA_REQUEST } from 'constants.js';
import { getMovies } from 'services/get-movies';

export function* fetchMoviesByData({ payload }) {
    try {
        const response = yield call(getMovies, payload);
        const movies = response.data;
        yield put(actions.fetchMoviesByDataSuccess(movies));
    } catch (error) {
        yield put(actions.fetchMoviesByDataError(error.message));
    }
}

export function* watchFetchMoviesByData() {
    yield takeEvery(FETCH_MOVIES_BY_DATA_REQUEST, fetchMoviesByData);
}
