import { FETCH_MOVIES_BY_GENRE_REQUEST } from 'constants.js';

import { takeLatest } from 'redux-saga/effects';
import { fetchMoviesByGenre } from './fetchMovies';

export function* rootSaga() {
    yield takeLatest(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
