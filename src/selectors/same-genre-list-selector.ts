import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';
import { MovieState } from 'types/index';

export const sameGenreListSelector = createSelector(
    movieSelector,
    (movie: MovieState) => movie.sameGenreList
);
