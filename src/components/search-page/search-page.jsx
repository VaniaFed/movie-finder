import React from 'react';
import { SearchBlock } from 'components/search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

import './search-page.scss';

export const SearchPage = ({
    movies,
    searchValue,
    changeSearchValue,
    onSearch
}) => {
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <SearchBlock
                searchValue={searchValue}
                onSearch={onSearch}
                onInput={changeSearchValue}
            />
            <SearchPageInfo
                quantityMovies={movies.length}
                className="search-page__info"
            />
            <YetLoader
                condition={typeof movies !== 'undefined'}
                cap={<Cap />}
                content={() => <MovieLayout movies={movies} />}
            />
        </>
    );
};
