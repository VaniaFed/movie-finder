import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { getFilms } from 'services/getFilms';

export function* fetchMovieById(action) {
    try {
        const response = yield call(getFilms, action);
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
