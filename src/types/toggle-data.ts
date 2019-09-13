import { SearchBy, SortBy } from 'types/common';

export interface ToggleData {
    key: SortBy | SearchBy;
    text: string;
    onClick?(any: any): any;
}
