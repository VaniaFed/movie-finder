import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';
import { MovieState, SearchBy } from 'types/index';

export const searchBySelector = createSelector(
    movieSelector,
    (movie: MovieState): SearchBy => movie.searchBy
);
