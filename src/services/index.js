import { pipe } from 'rxjs';
import { getMovieById } from './get-movie-by-id';
import { getMovies } from './get-movies';

const fetch = {
    getMovieById,
    getMovies
};

const logger = f => ({
    getMovieById: id => {
        console.group('getMovieById');
        console.log('id:', id);
        console.groupEnd();
        return f.getMovieById(id);
    },
    getMovies: params => {
        console.group('getMovies');
        console.log('params:', params);
        console.groupEnd();
        return f.getMovies(params);
    }
});

export const services = pipe(logger)(fetch);
