import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { MoviePage } from 'components/movie-page';
import { Preloader } from 'components/preloader';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { actions } from 'actions';
import { currentSelector } from 'selectors/current-selector';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector.js';

const mapStateToProps = createSelector(
    currentSelector,
    sameGenreListSelector,
    (current, list) => ({
        movie: current,
        moviesWithTheSameGenre: list
    })
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMovieById: id => {
            dispatch(actions.fetchMovieByIdRequest(id));
        }
    };
};

export const MoviePageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    memo(({ movie, moviesWithTheSameGenre, fetchMovieById }) => {
        const router = useRouter();
        const { id } = router.query;
        const [isStartedLoading, setIsStartedLoading] = useState(false);
        useEffect(() => {
            if (!isStartedLoading) {
                setIsStartedLoading(true);
                fetchMovieById(id);
            }
        }, [id]);

        useEffect(() => {
            if (
                'genres' in movie &&
                moviesWithTheSameGenre.length !== 0 &&
                isStartedLoading
            ) {
                setIsStartedLoading(false);
            }
        }, [movie, moviesWithTheSameGenre, isStartedLoading]);

        const FilmsNotFound = () => <NotFound caption="Film(s) not found" />;
        return (
            <>
                {isStartedLoading ? (
                    <Preloader />
                ) : (
                    <YetLoader
                        condition={
                            typeof movie !== 'undefined' &&
                            'genres' in movie &&
                            typeof moviesWithTheSameGenre !== 'undefined' &&
                            moviesWithTheSameGenre.length !== 0
                        }
                        cap={<FilmsNotFound />}
                        content={() => (
                            <>
                                <MoviePage movie={movie} />
                                <MovieLayout movies={moviesWithTheSameGenre} />
                            </>
                        )}
                    />
                )}
            </>
        );
    })
);

MoviePageSmart.propTypes = {
    match: PropTypes.objectOf(PropTypes.object),
    movie: PropTypes.objectOf(PropTypes.object),
    moviesWithTheSameGenre: PropTypes.objectOf(PropTypes.object),
    fetchMovieById: PropTypes.func
};
