import regeneratorRuntime from 'regenerator-runtime';
import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.ts';
import { services } from 'services';
import { MovieType, ControlsData } from 'types/index';

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
        const data: ControlsData = {
            search: genre,
            searchBy: 'genre',
            sortBy: 'rating'
        };
        yield put(actions.fetchMoviesByGenreRequest(data));
    } catch (error) {
        yield put(actions.fetchMovieByIdError(error.message));
    }
}

export function* watchFetchMovieById() {
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
}
