import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from 'components/not-found';
import { MovieCard } from 'components/movie-card';
import './movie-loyout.scss';

export const MovieLoyout = ({ movies }) => {
    if (movies.length > 0) {
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
    }
    return <NotFound caption="Not films found" className="movies__notFound" />;
};

MovieLoyout.propTypes = {
    movies: PropTypes.objectOf(PropTypes.object).isRequired
};
