import { createSelector } from 'reselect';
import { movieSelector } from 'selectors/movie-selector';

export const currentSelector = createSelector(
    movieSelector,
    movie => {
        return movie.get('current');
    }
);
