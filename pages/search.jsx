import React from 'react';
import { SearchPageSmart } from 'containers/search-page-smart';

const Search = ({ location }) => {
    return <SearchPageSmart location={location} />;
};

Search.getInitialProps = props => {
    let search = '';
    if (typeof props.req !== 'undefined') {
        search = props.req._parsedUrl.search;
    } else {
        search = props.pathname;
    }
    const location = { search };
    return { location };
};

export default Search;
