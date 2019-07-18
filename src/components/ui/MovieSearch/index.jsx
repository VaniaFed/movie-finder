import React, { Fragment } from 'react';
import { MoviesList } from 'Components/ui/MoviesList';
import { v4 } from 'uuid';
import { SearchBlock } from 'Components/ui/SearchBlock';

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
            <SearchBlock />
            <MoviesList movies={movies} />
        </Fragment>
    );
};
