import { FETCH_MOVIES_REQUEST } from 'constants.js';

import { takeLatest } from 'redux-saga/effects';
import { fetchMovies } from './fetchMovies';

export function* rootSaga() {
    yield takeLatest(FETCH_MOVIES_REQUEST, fetchMovies);
}
