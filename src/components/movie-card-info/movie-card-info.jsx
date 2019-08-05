import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './movie-card-info.scss';

export const MovieCardInfo = memo(({ movie, className }) => {
    const resultClass = classNames('movie-card-info', className);
    return (
        <div className={resultClass}>
            <div className="movie-card-info__left">
                <h2 className="movie-card-info__title">{movie.title}</h2>
                <p className="movie-card-info__genres">{movie.genres}</p>
            </div>
            <p className="movie-card-info__date">{movie.release_date}</p>
        </div>
    );
});

MovieCardInfo.propTypes = {
    movie: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string
};
