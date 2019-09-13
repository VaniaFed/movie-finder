// TODO: вынести в общие типы
export interface ControlsData {
    search: string;
    searchBy: 'title' | 'genre'; // SearchBy
    sortBy: 'release_date' | 'rating';
    sortOrder: 'desc' | 'asc';
}
