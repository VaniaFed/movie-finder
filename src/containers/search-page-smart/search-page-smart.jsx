import React from 'react';
import { SearchPage } from 'components/search-page';
import { v4 } from 'uuid';

export const SearchPageSmart = () => {
    const movies = [
        {
            title: 'movei1',
            genres: ['action', 'drama'],
            tagline: 'some tagline',
            release_date: '2014',
            poster_path:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: ['action', 'drama'],
            tagline: 'some tagline',
            release_date: '2014',
            poster_path:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: ['action', 'drama'],
            tagline: 'some tagline',
            release_date: '2014',
            poster_path:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        }
    ];
    return <SearchPage movies={movies} />;
};
