import 'src/client';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { App } from 'containers/App';
import { configureStore } from 'src/store/';

import './global.scss';

const store = configureStore();
hydrate(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('app')
);
