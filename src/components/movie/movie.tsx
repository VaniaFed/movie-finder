import React, { FC } from 'react';
import classNames from 'classnames';
import './movie.scss';
import { Props } from './props';

export const Movie: FC<Props> = ({ movie, className }: Props) => {
    const formattedGenres: string = movie.genres.join(', ');
    const resultClass: string = classNames('movie', className);
    return (
        <div className={resultClass}>
            <img
                src={movie.poster_path}
                alt="movieimage"
                className="movie__image"
            />
            <div className="movie__info">
                <h2
                    className="movie__title"
                    data-text="movie-page__movie-title"
                >
                    {movie.title}
                </h2>
                <p className="movie__genres">{formattedGenres}</p>
                <p className="movie__date">{movie.release_date}</p>
                <p className="movie__duration">{movie.runtime}m</p>
                <p className="movie__description">{movie.overview}</p>
            </div>
        </div>
    );
};
