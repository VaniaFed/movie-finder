import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';
import { MovieState } from 'types/index';

export const currentSelector = createSelector(
    movieSelector,
    (movie: MovieState) => movie.current
);
