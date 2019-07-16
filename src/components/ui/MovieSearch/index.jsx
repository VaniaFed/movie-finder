import React, { Fragment } from 'react';
import { MoviesList } from 'Components/ui/MoviesList';
import { v4 } from 'uuid';
import { Search } from './Search';

export const MovieSearch = () => {
    const movies = [
        {
            label: 'movei1',
            id: v4()
        },
        {
            label: 'movei2',
            id: v4()
        },
        {
            label: 'movei1',
            id: v4()
        },
        {
            label: 'movei2',
            id: v4()
        },
        {
            label: 'movei3',
            id: v4()
        }
    ];
    return (
        <Fragment>
            <Search />
            <MoviesList movies={movies} />
        </Fragment>
    );
};
