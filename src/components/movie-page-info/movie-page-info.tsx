import React, { FC } from 'react';
import { Props } from './props';
import './movie-page-info.scss';

export const MoviePageInfo: FC<Props> = ({ genres }: Props) => {
    const formattedGenres = genres.join(', ');
    return (
        <div className="movie-page-info">
            <span className="movie-page-info__text">Films by</span>
            <span className="movie-page-info__genre">{formattedGenres}</span>
        </div>
    );
};
