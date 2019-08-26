import React from 'react';
import App from 'next/app';

import 'src/global.scss';

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
        return <Component {...pageProps} />;
    }
}

export default MyApp;
