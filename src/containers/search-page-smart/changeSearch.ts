import { isMap } from 'lib/is-map';
import { ControlsType } from './controls-type';

export const changeSearch = action => (
    urlData: ControlsType,
    controlsData: ControlsType
) => {
    const shouldChangeSearch = !isMap(urlData, controlsData, ['search']);
    if (shouldChangeSearch) {
        action(urlData.search);
    }
};
