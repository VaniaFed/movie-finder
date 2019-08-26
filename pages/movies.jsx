import React from 'react';
import { Provider } from 'react-redux';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { configureStore } from 'src/store/';
import { BoxContainer } from 'components/box-container';

const store = configureStore();
const Root = () => {
    return (
        <Provider store={store}>
            <BoxContainer>
                <MoviePageSmart />
            </BoxContainer>
        </Provider>
    );
};

export default Root;
