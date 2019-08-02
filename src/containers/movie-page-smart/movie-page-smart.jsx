import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovieRequest } from 'actions/movie';
import { v4 } from 'uuid';
import { MoviePage } from 'components/movie-page';
import { YetLoader } from 'containers/yet-loader';
import { MovieLoyout } from 'components/movie-loyout/';
import { NotFound } from 'components/not-found';

export const MoviePageSmart = ({ movie }) => {
    const [moviesWithTheSameGenre, setMoviesWithTheSameGenre] = useState([]);
    const movie = {
        title: 'movei1',
        genres: 'action',
        tagline: 'some tagline',
        releaseDate: '2014',
        runtime: 160,
        overview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem non id numquam nulla, porro itaque laborum ut, minima illum quaerat, iusto dignissimos harum quae? Corrupti sit laboriosam optio magnam!',
        posterPath:
            'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
        id: v4()
    };
    useEffect(() => {
        setMoviesWithTheSameGenre([movie]);
    }, []);

    const Cap = () => <NotFound caption="No films found" />;
    return (
        <>
            <MoviePage movie={movie} />
            <YetLoader
                condition={moviesWithTheSameGenre.length > 0}
                cap={<Cap />}
            >
                <MovieLoyout movies={moviesWithTheSameGenre} />
            </YetLoader>
        </>
    );
};

function mapStateToProps(state) {
    return {
        movie: state.movie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovie: () => dispatch(fetchMovieRequest())
    };
}

export default connect(
    mapStateToProps
    mapDispatchToProps
)(MoviePageSmart);
