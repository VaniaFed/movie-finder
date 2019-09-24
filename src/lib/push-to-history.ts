import { stringify, parse } from 'query-string';
import { SearchBy, SortBy, SortOrder } from 'types/index';

interface ControlsDataPush {
    search: string;
    searchBy?: SearchBy;
    sortBy?: SortBy;
    sortOrder?: SortOrder;
}
export const pushToHistory = (params: ControlsDataPush | any) => {
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
