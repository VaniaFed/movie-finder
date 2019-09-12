export interface ControlsData {
    search: string;
    searchBy: 'title' | 'genre';
    sortBy: 'release_date' | 'rating';
    sortOrder?: 'desc' | 'asc';
}
