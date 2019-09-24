import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { FETCH_MOVIES_BY_DATA_REQUEST } from 'constants.ts';
import { services } from 'services/index';
import { MovieType, ControlsData } from 'types/index';

interface Payload {
    payload: {
        data: ControlsData;
    };
}

export function* fetchMoviesByData({ payload: { data } }: Payload) {
    try {
        const movies: MovieType[] = yield call(services.getMovies, data);
        yield put(actions.fetchMoviesByDataSuccess(movies));
    } catch (error) {
        yield put(actions.fetchMoviesByDataError(error.message));
    }
}

export function* watchFetchMoviesByData() {
    yield takeEvery(FETCH_MOVIES_BY_DATA_REQUEST as any, fetchMoviesByData);
}
