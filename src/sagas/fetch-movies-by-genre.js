import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.js';
import { getFilms } from 'services/getFilms';

export function* fetchMoviesByGenre({ payload }) {
    try {
        const response = yield call(getFilms, payload);
        const movies = response.data;
        yield put(actions.fetchMoviesByGenreSuccess(movies));
    } catch (error) {
        yield put(actions.fetchMoviesByGenreError(error.message));
    }
}

export function* watchFetchMoviesByGenre() {
    yield takeEvery(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
