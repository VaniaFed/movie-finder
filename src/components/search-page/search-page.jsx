import React from 'react';
import { SearchBlockSmart } from 'containers/search-block-smart';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

export const SearchPage = ({ movies, onSearch }) => {
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <SearchBlockSmart onSearch={onSearch} />
            <SearchPageInfo quantityMovies={movies.length} />
            <YetLoader
                condition={typeof movies !== 'undefined'}
                cap={<Cap />}
                content={() => <MovieLayout movies={movies} />}
            />
        </>
    );
};
