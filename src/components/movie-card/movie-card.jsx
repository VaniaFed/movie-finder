import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { MovieCardInfo } from 'components/movie-card-info';
import './movie-card.scss';

export const MovieCard = memo(({ movie, className }) => {
    const resultClass = classNames('movie-card', className);
    return (
        <div className={resultClass}>
            <Link to={`/movies/${movie.id}`}>
                <img
                    className="movie-card__image"
                    src={movie.poster_path}
                    alt={movie.title}
                />
                <MovieCardInfo movie={movie} className="movie-card__info" />
            </Link>
        </div>
    );
});

MovieCard.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object).isRequired,
    className: PropTypes.string
};
