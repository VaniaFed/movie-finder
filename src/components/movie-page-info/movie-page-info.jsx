import React from 'react';
import PropTypes from 'prop-types';
import './movie-page-info.scss';

export const MoviePageInfo = ({ genres }) => {
    const formattedGenres = genres.join(', ');
    return (
        <div className="movie-page-info">
            <span className="movie-page-info__text">Films by</span>
            <span className="movie-page-info__genre">{formattedGenres}</span>
        </div>
    );
};

MoviePageInfo.propTypes = {
    genre: PropTypes.objectOf(PropTypes.object)
};
