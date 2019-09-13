import React, { FC } from 'react';
import { MovieHeader } from 'components/movie-header/';
import { Movie } from 'components/movie';
import { Props } from './props';
import './movie-block.scss';

export const MovieBlock: FC<Props> = ({ movie }: Props) => {
    return (
        <div className="movie-block">
            <MovieHeader />
            <Movie movie={movie} className="movie-block__movie" />
        </div>
    );
};
