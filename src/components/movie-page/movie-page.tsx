import React, { FC } from 'react';
import { MovieBlock } from 'components/movie-block/';
import { MoviePageInfo } from 'components/movie-page-info';
import { Props } from './props';

export const MoviePage: FC<Props> = ({ movie }: Props) => {
    return (
        <>
            <MovieBlock movie={movie} />
            <MoviePageInfo genres={movie.genres} />
        </>
    );
};
