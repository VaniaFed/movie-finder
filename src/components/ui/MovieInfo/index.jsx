import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './movieInfo.scss';

export const MovieInfo = memo(({ movie, className }) => {
    const resultClass = classNames('movie-info', className);
    return (
        <div className={resultClass}>
            <div className="movie-info__left">
                <h2 className="movie-info__title">{movie.title}</h2>
                <p className="movie-info__genres">{movie.genres}</p>
            </div>
            <p className="movie-info__date">{movie.releaseDate}</p>
        </div>
    );
});

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
    className: PropTypes.string
};
