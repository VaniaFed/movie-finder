import { actions } from 'actions';
import { ControlsData } from 'types';
import { movie } from './movie';

let state = {
    current: {},
    list: [],
    sameGenreList: [],
    error: '',
    searchBy: 'title',
    sortBy: 'release_date'
};

describe('movie reducer', () => {
    afterAll(() => {
        state = {
            current: {},
            list: [],
            sameGenreList: [],
            error: '',
            searchBy: 'title',
            sortBy: 'release_date'
        };
    });

    it("FETCH_MOVIE_BY_ID_REQUEST should't change store", () => {
        const result = movie(state, actions.fetchMovieByIdRequest(5));
        expect(result).toEqual(state);
    });

    it('FETCH_MOVIE_BY_ID_SUCCESS should work', () => {
        const expectedMovie = { id: 4, title: 'this movie', rate: 4.6 };
        const result = movie(
            state,
            actions.fetchMovieByIdSuccess(expectedMovie)
        );
        expect(result).toEqual({
            current: expectedMovie,
            list: [],
            sameGenreList: [],
            error: '',
            searchBy: 'title',
            sortBy: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_DATA_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMovieByIdError('some error so sorry...')
        );
        expect(result).toEqual({
            ...state,
            error: 'some error so sorry...'
        });
    });

    it("FETCH_MOVIE_BY_DATA_REQUEST should't change store", () => {
        const data: ControlsData = {
            search: 'harry',
            searchBy: 'title',
            sortBy: 'release_date'
        };
        const result = movie(state, actions.fetchMoviesByDataRequest(data));
        expect(result).toEqual(state);
    });

    it('FETCH_MOVIE_BY_DATA_SUCCESS should work', () => {
        const expectedList = [
            { id: 1, title: '1st movie', rate: 4.6 },
            { id: 2, title: '2d movie', rate: 3.4 },
            { id: 3, title: '3d movie', rate: 999.6 }
        ];
        const result = movie(
            state,
            actions.fetchMoviesByDataSuccess(expectedList)
        );
        expect(result).toEqual({
            current: {},
            list: expectedList,
            sameGenreList: [],
            error: '',
            searchBy: 'title',
            sortBy: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_DATA_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMoviesByDataError('some error so sorry...')
        );
        expect(result).toEqual({
            ...state,
            error: 'some error so sorry...'
        });
    });

    it("FETCH_MOVIE_BY_GENRE_REQUEST should't change store", () => {
        const result = movie(
            state,
            actions.fetchMoviesByGenreRequest('action')
        );
        expect(result).toEqual(state);
    });

    it('FETCH_MOVIE_BY_GENRE_SUCCESS should work', () => {
        const expectedSameGenres = [
            { id: 1, title: '1st movie', rate: 4.6 },
            { id: 2, title: '2d movie', rate: 3.4 },
            { id: 3, title: '3d movie', rate: 999.6 }
        ];
        const result = movie(
            state,
            actions.fetchMoviesByGenreSuccess(expectedSameGenres)
        );
        expect(result).toEqual({
            current: {},
            list: [],
            sameGenreList: expectedSameGenres,
            error: '',
            searchBy: 'title',
            sortBy: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_GENRE_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMoviesByGenreError('some error so sorry...')
        );
        expect(result).toEqual({
            ...state,
            error: 'some error so sorry...'
        });
    });

    it('SEARCH_FILTER should change field', () => {
        const result = movie(state, actions.setSearchBy('genre'));
        expect(result).toEqual({
            ...state,
            searchBy: 'genre'
        });
    });
    it('SORT_FILTER should change field', () => {
        const result = movie(state, actions.setSortBy('rating'));
        expect(result).toEqual({
            ...state,
            sortBy: 'rating'
        });
    });
});
