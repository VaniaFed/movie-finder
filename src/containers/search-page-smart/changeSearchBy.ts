import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const changeSearchBy = (action: any) => (
    urlData: ControlsType,
    controlsData: ControlsType
) => {
    const shouldChangeSearchBy = !isMap(urlData, controlsData, ['searchBy']);
    if (shouldChangeSearchBy) {
        action(urlData.searchBy);
    }
};
