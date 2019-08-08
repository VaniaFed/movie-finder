import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.js';
import { request } from 'src/utils/request';

export function* fetchMoviesByGenre({ payload }) {
    const url = `http://react-cdp-api.herokuapp.com/movies?search=${payload.genre}&searchBy=genres`;
    try {
        const response = yield call(request, url);
        const movies = response.data;
        yield put(actions.fetchMoviesByGenreSuccess(movies));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(actions.fetchMoviesByGenreError(message));
    }
}

export function* watchFetchMoviesByGenre() {
    yield takeEvery(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
