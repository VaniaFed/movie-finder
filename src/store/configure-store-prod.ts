import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'reducers/index';
import { rootSaga } from 'src/sagas';
import { MovieState } from 'types/index';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
    const store: Store<{ movie: MovieState }> = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);

    return store;
};
