import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { MoviePage } from 'components/movie-page';
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
    memo(({ match, movie, moviesWithTheSameGenre, fetchMovieById }) => {
        const { id } = match.params;
        useEffect(() => {
            fetchMovieById(id);
        });

        const Cap = () => <NotFound caption="No films found" />;
        const MovieCap = () => <NotFound caption="Film not found" />;
        return (
            <>
                <YetLoader
                    condition={
                        typeof movie !== 'undefined' && 'genres' in movie
                    }
                    cap={<MovieCap />}
                    content={() => <MoviePage movie={movie} />}
                />
                <YetLoader
                    condition={typeof moviesWithTheSameGenre !== 'undefined'}
                    cap={<Cap />}
                    content={() => (
                        <MovieLayout movies={moviesWithTheSameGenre} />
                    )}
                />
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
