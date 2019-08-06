import React from 'react';
import { v4 } from 'uuid';
import { SearchBlock } from 'components/search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

export const SearchPage = ({ movies }) => {
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <SearchBlock />
            <SearchPageInfo quantityMovies={movies.length} />
            <YetLoader condition={movies.length > 0} Cap={Cap}>
                <MovieLayout movies={movies} />
            </YetLoader>
        </>
    );
};
