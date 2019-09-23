import { put, call, takeEvery, select } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.ts';
import { services } from 'services/index';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';
import { MovieType, ControlsData } from 'types/index';

interface Payload {
    payload: {
        data: ControlsData;
    };
}

export function* fetchMoviesByGenre({ payload: { data } }: Payload) {
    try {
        const store = yield select();
        const sameGenreMovies: MovieType[] = sameGenreListSelector(store);
        if (
            sameGenreMovies.length === 0 ||
            sameGenreMovies[0].genres[0] !== data.search
        ) {
            const movies: MovieType[] = yield call(services.getMovies, data);
            yield put(actions.fetchMoviesByGenreSuccess(movies));
        }
    } catch (error) {
        yield put(actions.fetchMoviesByGenreError(error.message));
    }
}

export function* watchFetchMoviesByGenre() {
    yield takeEvery(FETCH_MOVIES_BY_GENRE_REQUEST as any, fetchMoviesByGenre);
}
