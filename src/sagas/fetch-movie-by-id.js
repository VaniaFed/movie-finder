import regeneratorRuntime from 'regenerator-runtime';
import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { getMovieById } from 'services/get-movie-by-id';

export function* fetchMovieById({ payload }) {
    try {
        const response = yield call(getMovieById, payload);
        const movie = response;
        yield put(actions.fetchMovieByIdSuccess(movie));
        const genre = movie.genres[0];
        yield put(actions.fetchMoviesByGenreRequest(genre, 'genres'));
    } catch (error) {
        yield put(actions.fetchMovieByIdError(error.message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
