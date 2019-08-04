import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviesRequest } from 'actions/movie';
import { v4 } from 'uuid';
import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLoyout } from 'components/movie-loyout/';
import { NotFound } from 'components/not-found';

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchMoviesRequest
        },
        dispatch
    );

export const MoviePageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ movies, fetchMoviesRequest }) => {
    // const [moviesWithTheSameGenre, setMoviesWithTheSameGenre] = useState([]);
    useEffect(() => {
        // setMoviesWithTheSameGenre([movies[0]]);
        fetchMoviesRequest();
        console.log(movies);
    }, movies);
    console.log(movies);

    // I can't get access to the movies after fetching
    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            {/* <MoviePage movie={movies[0]} /> */}
            {/* <YetLoader
                condition={moviesWithTheSameGenre.length > 0}
                cap={<Cap />}
            >
                <MovieLoyout movies={moviesWithTheSameGenre} />
            </YetLoader> */}
        </>
    );
});
