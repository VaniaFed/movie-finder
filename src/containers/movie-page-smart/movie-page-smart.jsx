import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoviesByGenreRequest } from 'actions/movies-by-genre';
import { fetchMovieByIdRequest } from 'actions/movie-by-id';
import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLoyout } from 'components/movie-loyout/';
import { NotFound } from 'components/not-found';

const mapStateToProps = state => ({
    movie: state.movie,
    moviesWithTheSameGenre: state.movies,
    state
});

const mapDispatchToProps = dispatch => bindActionCreators(
        {
            fetchMovieByIdRequest,
            fetchMoviesByGenreRequest
        },
        dispatch
    );

export const MoviePageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({
        movie,
        moviesWithTheSameGenre,
        state,
        fetchMovieByIdRequest,
        fetchMoviesByGenreRequest
    }) => {
        useEffect(() => {
            fetchMovieByIdRequest(5);
            console.log(state);
            // const genre = movie[0].genres[0];
            // fetchMoviesByGenreRequest(genre);
        }, []);

        const Cap = () => <NotFound caption="No films found" />;
        return (
            <>
                <YetLoader
                    condition={typeof movie !== 'undefined'}
                    cap={<Cap />}
                >
                    <MoviePage movie={movie} />
                </YetLoader>
                {/* <YetLoader
                    condition={moviesWithTheSameGenre.length > 0}
                    cap={<Cap />}
                >
                    <MovieLoyout movies={moviesWithTheSameGenre} />
                </YetLoader> */}
            </>
        );
    }
);
