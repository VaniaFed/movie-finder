import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const changeSearchFilter = action => (
    urlData: ControlsType,
    controlsData: ControlsType
) => {
    const shouldChangeSearchFilter = !isMap(urlData, controlsData, [
        'searchFilter'
    ]);
    if (shouldChangeSearchFilter) {
        action(urlData.searchFilter);
    }
};
