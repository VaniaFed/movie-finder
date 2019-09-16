import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';
import { MovieState } from 'types/index';

export const searchSelector = createSelector(
    movieSelector,
    (movie: MovieState): string => movie.search
);
