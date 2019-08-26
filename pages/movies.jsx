import React from 'react';
import { MoviePageSmart } from 'containers/movie-page-smart';
import { configureStore } from 'src/store/';
import { BoxContainer } from 'components/box-container';

const Root = () => {
    return (
        <BoxContainer>
            <MoviePageSmart />
        </BoxContainer>
    );
};

export default Root;
