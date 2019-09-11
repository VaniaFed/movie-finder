import regeneratorRuntime from 'regenerator-runtime';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';
import { services } from 'services';
import { MovieType } from 'types/index';

interface Payload {
    payload: {
        id: number;
    };
}

export function* fetchMovieById({ payload }: Payload) {
    try {
        const movie: MovieType = yield call(services.getMovieById, payload);
        yield put(actions.fetchMovieByIdSuccess(movie));
        const genre: string = movie.genres[0];
        yield put(actions.fetchMoviesByGenreRequest(genre, 'genres'));
    } catch (error) {
        yield put(actions.fetchMovieByIdError(error.message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
