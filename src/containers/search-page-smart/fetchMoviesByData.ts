import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const fetchMoviesByData = action => sideEffects => (
    urlData: ControlsType,
    controlsData: ControlsType,
    isStartedLoading: boolean
) => {
    const shouldFetchMovies = !isMap(urlData, controlsData);
    if (shouldFetchMovies && !isStartedLoading) {
        sideEffects();
        action(urlData.search, urlData.searchFilter, urlData.sortFilter);
    }
};
