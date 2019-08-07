import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'containers/App';
import { configureStore } from 'src/configureStore';

import './global.scss';

const initialState = { movies: [], movie: {} };
const store = configureStore(initialState);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);
