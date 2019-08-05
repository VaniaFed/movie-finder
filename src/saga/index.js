import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIES_BY_GENRE_REQUEST
} from 'constants.js';

import { takeLatest, call } from 'redux-saga/effects';
import { fetchMoviesByGenre } from './fetch-movies-by-genre';
import { fetchMovieById } from './fetch-movie-by-id';

// const sagas = [fetchMovieById, fetchMoviesByGenre];
export function* rootSaga() {
    // for (const saga of sagas) {
    //     yield call(saga()); /* saga: fetchUserSaga || fetchStyleSaga */
    // }
    yield takeLatest(FETCH_MOVIE_BY_ID_REQUEST, fetchMovieById);
    yield takeLatest(FETCH_MOVIES_BY_GENRE_REQUEST, fetchMoviesByGenre);
}
