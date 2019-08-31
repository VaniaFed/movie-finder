import React from 'react';
import { SmartSearchBlock } from 'containers/smart-search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { Preloader } from 'components/preloader';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

import './search-page.scss';

export const SearchPage = ({
    movies,
    sortFilter,
    isStartedLoading,
    setIsStartedLoading,
    changeSortFilter
}) => {
    const notFound = () => <NotFound caption="Movies aren't found" />;
    return (
        <>
            <SmartSearchBlock
                sortFilter={sortFilter}
                setIsStartedLoading={setIsStartedLoading}
            />
            <SearchPageInfo
                quantityMovies={movies.length}
                className="search-page__info"
                changeSortFilter={changeSortFilter}
                sortFilter={sortFilter}
            />
            {isStartedLoading ? (
                <Preloader />
            ) : (
                <YetLoader
                    condition={
                        typeof movies !== 'undefined' && movies.length !== 0
                    }
                    cap={notFound}
                    content={() => <MovieLayout movies={movies} />}
                />
            )}
        </>
    );
};
