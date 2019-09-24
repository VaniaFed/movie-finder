import { SearchBy, SortBy, SortOrder } from 'types/common';

export interface ControlsData {
    search: string;
    searchBy: SearchBy;
    sortBy: SortBy;
    sortOrder?: SortOrder;
}
