import { all } from 'redux-saga/effects';
import { watchFetchMoviesByGenre } from './fetch-movies-by-genre';
import { watchFetchMovieById } from './fetch-movie-by-id';
import { watchFetchMoviesByData } from './fetch-movies-by-data';

export function* rootSaga() {
    yield all([
        watchFetchMovieById(),
        watchFetchMoviesByGenre(),
        watchFetchMoviesByData()
    ]);
}
