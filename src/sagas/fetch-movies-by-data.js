import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_DATA_REQUEST } from 'constants.js';
import { getFilms } from 'services/getFilms';

export function* fetchMoviesByData(action) {
    try {
        const response = yield call(getFilms, action);
        const movies = response.data;
        yield put(actions.fetchMoviesByDataSuccess(movies));
    } catch (error) {
        yield put(actions.fetchMoviesByDataError(error.message));
    }
}

export function* watchFetchMoviesByData() {
    yield takeEvery(FETCH_MOVIES_BY_DATA_REQUEST, fetchMoviesByData);
}
