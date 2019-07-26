import React from 'react';
import { MoviePage } from 'components/movie-page';
import { v4 } from 'uuid';

export const MoviePageSmart = () => {
    const movies = [
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            runtime: 160,
            overview:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem non id numquam nulla, porro itaque laborum ut, minima illum quaerat, iusto dignissimos harum quae? Corrupti sit laboriosam optio magnam!',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        }
    ];
    return <MoviePage movie={movies[0]} moviesWithTheSameGenre={movies} />;
};
