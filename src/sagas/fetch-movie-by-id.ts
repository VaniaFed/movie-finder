import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';

import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.ts';
import { services } from 'services/index';
import { MovieType, ControlsData } from 'types/index';

interface Payload {
    payload: {
        id: string;
    };
}

export function* fetchMovieById({ payload: { id } }: Payload) {
    try {
        const movie: MovieType = yield call(services.getMovieById, id);
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
    yield takeEvery(FETCH_MOVIE_BY_ID_REQUEST as any, fetchMovieById);
}
