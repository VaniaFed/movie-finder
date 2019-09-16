import { MovieType } from 'types/index';

export interface MovieState {
    current: MovieType;
    list: MovieType[];
    sameGenreList: MovieType[];
    error: string;
    search: string;
    searchBy: 'title' | 'genre';
    sortBy: 'release_date' | 'rating';
}
