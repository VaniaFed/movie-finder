import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NotFound } from 'Components/not-found';
import { Movie } from 'Components/movie';
import './movie-loyout.scss';

export const MovieLoyout = memo(({ movies }) => {
    if (movies.length > 0) {
        return (
            <div className="movies">
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        className="movies__item"
                    />
                ))}
            </div>
        );
    }
    return <NotFound caption="Not films found" className="movies__notFound" />;
});

MovieLoyout.propTypes = {
    movies: PropTypes.objectOf(PropTypes.object).isRequired
};
