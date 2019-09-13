import React, { FC } from 'react';
import { SmartMovieHeader } from 'containers/smart-movie-header';
import { Movie } from 'components/movie';
import { Props } from './props';
import './movie-block.scss';

export const MovieBlock: FC<Props> = ({ movie }: Props) => {
    return (
        <div className="movie-block">
            <SmartMovieHeader />
            <Movie movie={movie} className="movie-block__movie" />
        </div>
    );
};
