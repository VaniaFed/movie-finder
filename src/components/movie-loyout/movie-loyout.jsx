import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from 'components/not-found';
import { MovieCard } from 'components/movie-card';
import './movie-loyout.scss';

export const MovieLoyout = ({ movies }) => (
    <div className="movies">
        {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} className="movies__item" />
        ))}
    </div>
);

MovieLoyout.propTypes = {
    movies: PropTypes.objectOf(PropTypes.object).isRequired
};
