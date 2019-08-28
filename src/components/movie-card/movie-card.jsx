import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import { MovieCardInfo } from 'components/movie-card-info';
import './movie-card.scss';

export const MovieCard = memo(({ movie, className }) => {
    const resultClass = classNames('movie-card', className);
    return (
        <div className={resultClass}>
            <Link
                href={{ pathname: '/movies', query: { id: movie.id } }}
                as={`/movies/${movie.id}`}
            >
                <a>
                    <img
                        className="movie-card__image"
                        src={movie.poster_path}
                        alt={movie.title}
                    />
                    <MovieCardInfo movie={movie} className="movie-card__info" />
                </a>
            </Link>
        </div>
    );
});

MovieCard.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object).isRequired,
    className: PropTypes.string
};
