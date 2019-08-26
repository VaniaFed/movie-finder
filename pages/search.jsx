import React from 'react';
import { Provider } from 'react-redux';
import { SearchPageSmart } from 'containers/search-page-smart';
import { BoxContainer } from 'components/box-container';
import { configureStore } from 'src/store/';

const store = configureStore();
const Root = () => (
    <Provider store={store}>
        <BoxContainer>
            <SearchPageSmart />
        </BoxContainer>
    </Provider>
);
export default Root;
