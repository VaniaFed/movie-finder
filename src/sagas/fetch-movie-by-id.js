import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { getFilmsById } from 'services/getFilmsById';

export function* fetchMovieById({ payload }) {
    try {
        const response = yield call(getFilmsById, payload);
        const movie = response;
        yield put(actions.fetchMovieByIdSuccess(movie));
        const genre = movie.genres[0];
        yield put(actions.fetchMoviesByDataRequest(genre, 'genres'));
    } catch (error) {
        yield put(actions.fetchMovieByIdError(error.message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
