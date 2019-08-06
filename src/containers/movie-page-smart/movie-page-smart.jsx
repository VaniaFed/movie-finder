import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { fetchMovieByIdRequest } from 'actions/movie-by-id';

const mapStateToProps = state => ({
    movie: state.movie.movie,
    moviesWithTheSameGenre: state.moviesByGenre.moviesByGenre,
    state
});

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
        return (
            <>
                <YetLoader
                    condition={typeof movie !== 'undefined'}
                    cap={<div />}
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
