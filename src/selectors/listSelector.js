import { createSelector } from 'reselect';
import { movieSelector } from './movieSelector';

export const listSelector = createSelector(
    movieSelector,
    movie => movie.get('list')
);
