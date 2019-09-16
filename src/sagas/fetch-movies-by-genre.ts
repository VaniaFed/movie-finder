import { put, call, takeEvery, select } from 'redux-saga/effects';
import { actions } from 'actions';
import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.ts';
import { services } from 'services';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';
import { MovieType } from 'types/index';

export function* fetchMoviesByGenre({ payload }) {
    try {
        const store = yield select();
        const sameGenreMovies: MovieType[] = sameGenreListSelector(store);
        if (
            sameGenreMovies.length === 0 ||
            sameGenreMovies[0].genres[0] !== payload.search
        ) {
            const movies: MovieType[] = yield call(services.getMovies, payload);
            yield put(actions.fetchMoviesByGenreSuccess(movies));
        }
    } catch (error) {
        yield put(actions.fetchMoviesByGenreError(error.message));
    }
}

export function* watchFetchMoviesByGenre() {
    yield takeEvery(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
