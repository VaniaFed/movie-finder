import { stringify, parse } from 'query-string';
import { ControlsData } from 'types/index';

export const pushToHistory = (params: ControlsData) => {
    const existedHistoryData = parse(window.location.search);
    const dataToPush = {
        ...existedHistoryData,
        ...params
    };
    window.history.pushState(
        null,
        null,
        `search?${stringify(dataToPush, { sort: false })}`
    );
};
