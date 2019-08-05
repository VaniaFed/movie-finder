import { put, call } from 'redux-saga/effects';
import {
    fetchMoviesByGenreSuccess,
    fetchMoviesByGenreError
} from 'actions/movies-by-genre';
import { request } from 'src/utils/request';

export function* fetchMoviesByGenre({ payload }) {
    const url = `http://react-cdp-api.herokuapp.com/movies?search=${payload.genre}&searchBy=genres`;
    try {
        const response = yield call(request, url);
        const movies = response.data;
        yield put(fetchMoviesByGenreSuccess(movies));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(fetchMoviesByGenreError(message));
    }
}
