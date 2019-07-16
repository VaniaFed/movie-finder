import React, { Fragment } from 'react';
import { MoviesList } from 'Components/ui/MoviesList';
import { Search } from './Search';

export const MovieSearch = () => {
    const movies = [
        {
            label: 'movei1'
        },
        {
            label: 'movei2'
        },
        {
            label: 'movei3'
        }
    ];
    return (
        <Fragment>
            <Search />
            <MoviesList movies={movies} />
        </Fragment>
    );
};
