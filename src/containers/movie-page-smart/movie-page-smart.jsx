import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviesByGenreRequest } from 'actions/movies-by-genre';
import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLoyout } from 'components/movie-loyout/';
import { NotFound } from 'components/not-found';

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => bindActionCreators(
        {
            fetchMoviesByGenreRequest
        },
        dispatch
    );

export const MoviePageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ movies, fetchMoviesByGenreRequest }) => {
    useEffect(() => {
        fetchMoviesByGenreRequest('Horror');
    }, movies);

    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <YetLoader condition={movies.length > 0} cap={<Cap />}>
                <MoviePage movie={movies[0]} />
                <MovieLoyout movies={movies} />
            </YetLoader>
        </>
    );
});
