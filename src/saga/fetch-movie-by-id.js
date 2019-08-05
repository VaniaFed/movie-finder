import { put, call } from 'redux-saga/effects';
import {
    fetchMovieByIdSuccess,
    fetchMovieByIdError
} from 'actions/movie-by-id';
import { request } from 'src/utils/request';

export function* fetchMovieById({ payload }) {
    const url = `http://react-cdp-api.herokuapp.com/movies/${payload.id}`;
    try {
        const response = yield call(request, url);
        const movie = response;
        yield put(fetchMovieByIdSuccess(movie));
    } catch (error) {
        const message = 'Failed to fetch movies, please try again';
        yield put(fetchMovieByIdError(message));
    }
}
