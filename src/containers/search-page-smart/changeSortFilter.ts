import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const changeSortFilter = action => (
    urlData: ControlsType,
    controlsData: ControlsType
) => {
    const shouldChangeSortFilter = !isMap(urlData, controlsData, [
        'sortFilter'
    ]);
    if (shouldChangeSortFilter) {
        action(urlData.sortFilter);
    }
};
