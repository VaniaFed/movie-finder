import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'reducers';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    sagaMiddleware.run(rootSaga);

    return store;
};