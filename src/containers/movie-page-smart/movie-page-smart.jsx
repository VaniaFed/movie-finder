import React, { memo, useEffect } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { actions } from 'actions';
import { listSelector } from 'selectors/listSelector';
import { movieSelector } from 'selectors/movieSelector';

const currentSelector = createSelector(
    movieSelector,
    movie => {
        return movie.get('current');
    }
);

const mapStateToProps = createSelector(
    currentSelector,
    listSelector,
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
        useEffect(() => {
            fetchMovieById(5);
        }, []);

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
