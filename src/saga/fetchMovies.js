import { put, call } from 'redux-saga/effects';
import { fetchMoviesSuccess, fetchMoviesError } from 'actions/movie';
import { request } from 'src/utils/request';

export function* fetchMovies() {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    try {
        const response = yield call(request, url);
        const movies = response.data;
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(fetchMoviesError(message));
    }
}
