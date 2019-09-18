import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const fetchMoviesByData = (action: any) => (sideEffects: any) => (
    urlData: ControlsType,
    controlsData: ControlsType,
    isStartedLoading: boolean
) => {
    const shouldFetchMovies = !isMap(urlData, controlsData);
    if (shouldFetchMovies && !isStartedLoading) {
        sideEffects();
        action(urlData);
    }
};
