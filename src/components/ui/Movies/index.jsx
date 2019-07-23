import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from 'Components/ui/NotFound';
import { Movie } from 'Components/ui/Movie';
import './movies.scss';

export const Movies = ({ movies }) => {
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
};

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
};
