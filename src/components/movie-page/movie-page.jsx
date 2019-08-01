import React from 'react';
import PropTypes from 'prop-types';
import { MovieBlock } from 'components/movie-block/';
import { MovieLoyout } from 'components/movie-loyout/';
import { MoviePageInfo } from 'components/movie-page-info';
import { NotFound } from 'components/not-found';
import { YetLoader } from 'containers/yet-loader';

export const MoviePage = ({ movie, moviesWithTheSameGenre }) => {
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <MovieBlock movie={movie} />
            <MoviePageInfo genre={movie.genres} />
            <YetLoader
                condition={moviesWithTheSameGenre.length > 0}
                cap={<Cap />}
            >
                <MovieLoyout movies={moviesWithTheSameGenre} />
            </YetLoader>
        </>
    );
};

MoviePage.propTypes = {
    movie: PropTypes.object,
    moviesWithTheSameGenre: PropTypes.objectOf(PropTypes.object)
};
