import { createSelector } from 'reselect';
import { movieSelector } from './movie-selector';

export const listSelector = createSelector(
    movieSelector,
    movie => movie.get('list')
);
