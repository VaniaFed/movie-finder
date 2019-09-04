import React, { memo, FC } from 'react';
import classNames from 'classnames';
import { Props } from './props';
import './movie-card-info.scss';

export const MovieCardInfo: FC<Props> = memo(({ movie, className }: Props) => {
    const resultClass = classNames('movie-card-info', className);
    const formattedGenres = movie.genres.join(', ');
    return (
        <div className={resultClass}>
            <div className="movie-card-info__left">
                <h2 className="movie-card-info__title">{movie.title}</h2>
                <p className="movie-card-info__genres">{formattedGenres}</p>
            </div>
            <p className="movie-card-info__date">{movie.release_date}</p>
        </div>
    );
});
