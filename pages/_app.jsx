import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store/';
import App from 'next/app';

import 'src/global.scss';

const store = configureStore();
class MyApp extends App {
    static async getInitialProps({ ctx, query }) {
        const isServer = !!ctx.req;
        console.log('helelo');
        console.log(query);
        return {
            isServer,
            query
        };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;
