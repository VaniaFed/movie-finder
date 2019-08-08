import React, { memo, useEffect } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { fetchMovieByIdRequest } from 'actions/movie-by-id';

const selectCurrent = state => {
    return state.movie.current;
};

const selectList = state => state.movie.list;

const mapStateToProps = createSelector(
    selectCurrent,
    selectList,
    (current, list) => {
        return {
            movie: current,
            moviesWithTheSameGenre: list
        };
    }
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMovieById: id => {
            dispatch(fetchMovieByIdRequest(id));
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
                    condition={typeof movie !== 'undefined'}
                    cap={<MovieCap />}
                >
                    <MoviePage movie={movie} />
                </YetLoader>
                <YetLoader
                    condition={typeof moviesWithTheSameGenre !== 'undefined'}
                    cap={<Cap />}
                >
                    <MovieLayout movies={moviesWithTheSameGenre} />
                </YetLoader>
            </>
        );
    })
);
