import { createSelector } from 'reselect';
import { MovieState } from 'types/index';
import { movieSelector } from './movie-selector';

export const listSelector = createSelector(
    movieSelector,
    (movie: MovieState) => movie.list
);
