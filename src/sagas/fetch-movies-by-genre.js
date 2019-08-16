import { put, call, takeEvery, select } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.js';
import { services } from 'services';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';

export function* fetchMoviesByGenre({ payload }) {
    try {
        const store = yield select();
        const sameGenreMovies = sameGenreListSelector(store);
        if (
            sameGenreMovies.length === 0 ||
            sameGenreMovies[0].genres[0] !== payload.search
        ) {
            const response = yield call(services.getMovies, payload);
            const movies = response.data;
            yield put(actions.fetchMoviesByGenreSuccess(movies));
        }
    } catch (error) {
        yield put(actions.fetchMoviesByGenreError(error.message));
    }
}

export function* watchFetchMoviesByGenre() {
    yield takeEvery(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
