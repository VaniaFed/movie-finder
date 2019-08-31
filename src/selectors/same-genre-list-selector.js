import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';

export const sameGenreListSelector = createSelector(
    movieSelector,
    movie => {
        return movie.get('sameGenreList');
    }
);
