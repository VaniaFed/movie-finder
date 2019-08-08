import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { request } from 'src/utils/request';

export function* fetchMovieById({ payload }) {
    const url = `http://react-cdp-api.herokuapp.com/movies/${payload.id}`;
    try {
        const response = yield call(request, url);
        const movie = response;
        const genre = movie.genres[0];
        yield put(actions.fetchMovieByIdSuccess(movie));
        yield put(actions.fetchMoviesByGenreRequest(genre));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(actions.fetchMovieByIdError(message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
