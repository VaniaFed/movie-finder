import React from 'react';

import './movie-page--info.scss';

export const MoviePageInfo = ({ genre }) => {
    return (
        <div className="movie-page--info">
            <span className="movie-page--info__text">Films by</span>
            <span className="movie-page--info__genre">{genre}</span>
        </div>
    );
};
