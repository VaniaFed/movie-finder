import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const changeSortBy = action => (
    urlData: ControlsType,
    controlsData: ControlsType
) => {
    const shouldChangeSortBy = !isMap(urlData, controlsData, ['sortBy']);
    if (shouldChangeSortBy) {
        action(urlData.sortBy);
    }
};
