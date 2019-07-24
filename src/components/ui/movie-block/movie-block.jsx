import React from 'react';
import { MovieHeader } from 'Components/ui/movie-header/';
import { MovieBlockMovie } from 'Components/ui/movie-block--movie';
import './movie-block.scss';

export const MovieBlock = () => {
    return (
        <div className="movie-block">
            <MovieHeader />
            <MovieBlockMovie />
        </div>
    );
};
