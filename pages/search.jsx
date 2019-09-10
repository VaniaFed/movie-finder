import React from 'react';
import { SearchPageSmart } from 'containers/search-page-smart';

const Search = ({ location }) => {
    return <SearchPageSmart location={location} />;
};

Search.getInitialProps = ({ res }) => {
    const { query } = res.req;
    const location = query;
    return { location };
};

export default Search;
