import { all } from 'redux-saga/effects';
import { watchFetchMovieById } from './fetch-movie-by-id';
import { watchFetchMoviesByData } from './fetch-movies-by-data';

export function* rootSaga() {
    yield all([watchFetchMovieById(), watchFetchMoviesByData()]);
}
