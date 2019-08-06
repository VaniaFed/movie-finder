import {
    FETCH_MOVIE_BY_ID_REQUEST,
    FETCH_MOVIES_BY_GENRE_REQUEST
} from 'constants.js';

import { all } from 'redux-saga/effects';
import { watchFetchMoviesByGenre } from './fetch-movies-by-genre';
import { watchFetchMovieById } from './fetch-movie-by-id';

export function* rootSaga() {
    yield all([watchFetchMovieById(), watchFetchMoviesByGenre()]);
}
