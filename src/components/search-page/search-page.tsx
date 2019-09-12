import React, { ReactElement, FC } from 'react';
import { SmartSearchBlock } from 'containers/smart-search-block';
import { SearchPageInfo } from 'components/search-page-info';
import { MovieLayout } from 'components/movie-layout';
import { Preloader } from 'components/preloader';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';
import { Props } from './props';

import './search-page.scss';

export const SearchPage: FC<Props> = ({
    movies,
    sortBy,
    isStartedLoading,
    setIsStartedLoading,
    changeSortBy
}: Props): ReactElement => {
    const notFound: FC = () => <NotFound caption="Movies aren't found" />;
    return (
        <>
            <SmartSearchBlock
                sortBy={sortBy}
                setIsStartedLoading={setIsStartedLoading}
            />
            <SearchPageInfo
                quantityMovies={movies.length}
                className="search-page__info"
                changeSortBy={changeSortBy}
                sortBy={sortBy}
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
