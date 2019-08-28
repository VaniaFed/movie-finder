import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { Footer } from 'components/footer';
import { BoxContainer } from 'components/box-container';
import { configureStore } from 'src/store/';

import 'src/global.scss';

const store = configureStore();
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <BoxContainer>
                    <Component {...pageProps} />
                    <Footer />
                </BoxContainer>
            </Provider>
        );
    }
}

export default MyApp;
