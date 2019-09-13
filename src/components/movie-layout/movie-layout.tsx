import React, { FC } from 'react';
import { MovieCard } from 'components/movie-card';
import { Props } from './props';
import './movie-layout.scss';

export const MovieLayout: FC<Props> = ({ movies }: Props) => {
    return (
        <div className="movies">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    className="movies__item"
                />
            ))}
        </div>
    );
};
