import { pipe } from 'rxjs';
import { ControlsData } from 'types/index';
import { getMovieById } from './get-movie-by-id';
import { getMovies } from './get-movies';

const fetch = {
    getMovieById,
    getMovies
};

const logger = (f: any) => ({
    getMovieById: (id: string) => {
        console.group('getMovieById');
        console.log('id:', id);
        console.groupEnd();
        return f.getMovieById(id);
    },
    getMovies: (params: ControlsData) => {
        console.group('getMovies');
        console.log('params:', params);
        console.groupEnd();
        return f.getMovies(params);
    }
});

export const services = pipe(logger)(fetch);
