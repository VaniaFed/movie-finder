import React from 'react';
import { MovieHeader } from 'Components/movie-header/';
import { MovieBlockMovie } from 'Components/movie-block--movie';
import './movie-block.scss';

export const MovieBlock = ({ movie }) => {
    return (
        <div className="movie-block">
            <MovieHeader />
            <MovieBlockMovie movie={movie} />
        </div>
    );
};
