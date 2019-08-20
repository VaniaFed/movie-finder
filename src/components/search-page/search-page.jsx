import React from 'react';
import { SmartSearchBlock } from 'containers/smart-search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

import './search-page.scss';

export const SearchPage = ({ movies, sortFilter, changeSortFilter }) => {
    const Cap = () => <NotFound caption="No films found" />;

    return (
        <>
            <SmartSearchBlock sortFilter={sortFilter} />
            <SearchPageInfo
                quantityMovies={movies.length}
                className="search-page__info"
                changeSortFilter={changeSortFilter}
                sortFilter={sortFilter}
            />
            <YetLoader
                condition={typeof movies !== 'undefined'}
                cap={<Cap />}
                content={() => <MovieLayout movies={movies} />}
            />
        </>
    );
};
