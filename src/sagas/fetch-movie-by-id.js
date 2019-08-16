import regeneratorRuntime from 'regenerator-runtime';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { services } from 'services/';
import { currentSelector } from 'selectors/current-selector';

export function* fetchMovieById({ payload }) {
    try {
        const store = yield select();
        const currentMovie = currentSelector(store);
        if (String(currentMovie.id) !== payload.id || !currentMovie) {
            const response = yield call(services.getMovieById, payload);
            const movie = response;
            yield put(actions.fetchMovieByIdSuccess(movie));
            const genre = movie.genres[0];
            yield put(actions.fetchMoviesByGenreRequest(genre, 'genres'));
        }
    } catch (error) {
        yield put(actions.fetchMovieByIdError(error.message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
