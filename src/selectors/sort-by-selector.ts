import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';
import { MovieState, SortBy } from 'types/index';

export const sortBySelector = createSelector(
    movieSelector,
    (movie: MovieState): SortBy => movie.sortBy
);
