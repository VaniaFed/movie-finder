import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from 'components/movie-card';
import './movie-layout.scss';

export const MovieLayout = ({ movies }) => {
    return (
        <div className="movies">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    className="movies__item"
                />
            ))}
        </div>
    );
};

MovieLayout.propTypes = {
    movies: PropTypes.objectOf(PropTypes.object).isRequired
};
