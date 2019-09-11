import { Map } from 'immutable';
import { actions } from 'actions';
import { ControlsData } from 'types';
import { movie } from './movie';

let state = Map({
    current: {},
    list: [],
    sameGenreList: [],
    error: '',
    searchFilter: 'title',
    sortFilter: 'release_date'
});

describe('movie reducer', () => {
    afterAll(() => {
        state = Map({
            current: {},
            list: [],
            sameGenreList: [],
            error: '',
            searchFilter: 'title',
            sortFilter: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_ID_REQUEST should\'t change store', () => {
        const result = movie(state, actions.fetchMovieByIdRequest(5));
        expect(result.toJS()).toEqual(state.toJS());
    });

    it('FETCH_MOVIE_BY_ID_SUCCESS should work', () => {
        const expectedMovie = { id: 4, title: 'this movie', rate: 4.6 };
        const result = movie(
            state,
            actions.fetchMovieByIdSuccess(expectedMovie)
        );
        expect(result.toJS()).toEqual({
            current: expectedMovie,
            list: [],
            sameGenreList: [],
            error: '',
            searchFilter: 'title',
            sortFilter: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_DATA_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMovieByIdError('some error so sorry...')
        );
        expect(result.toJS()).toEqual({
            ...state.toJS(),
            error: 'some error so sorry...'
        });
    });

    it('FETCH_MOVIE_BY_DATA_REQUEST should\'t change store', () => {
        const data: ControlsData = {
            search: 'harry',
            searchFilter: 'title',
            sortFilter: 'release_date'
        };
        const result = movie(state, actions.fetchMoviesByDataRequest(data));
        expect(result.toJS()).toEqual(state.toJS());
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
        expect(result.toJS()).toEqual({
            current: {},
            list: expectedList,
            sameGenreList: [],
            error: '',
            searchFilter: 'title',
            sortFilter: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_DATA_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMoviesByDataError('some error so sorry...')
        );
        expect(result.toJS()).toEqual({
            ...state.toJS(),
            error: 'some error so sorry...'
        });
    });

    it('FETCH_MOVIE_BY_GENRE_REQUEST should\'t change store', () => {
        const result = movie(
            state,
            actions.fetchMoviesByGenreRequest('action')
        );
        expect(result.toJS()).toEqual(state.toJS());
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
        expect(result.toJS()).toEqual({
            current: {},
            list: [],
            sameGenreList: expectedSameGenres,
            error: '',
            searchFilter: 'title',
            sortFilter: 'release_date'
        });
    });

    it('FETCH_MOVIE_BY_GENRE_ERROR should change field message', () => {
        const result = movie(
            state,
            actions.fetchMoviesByGenreError('some error so sorry...')
        );
        expect(result.toJS()).toEqual({
            ...state.toJS(),
            error: 'some error so sorry...'
        });
    });

    it('SEARCH_FILTER should change field', () => {
        const result = movie(state, actions.searchFilter('genre'));
        expect(result.toJS()).toEqual({
            ...state.toJS(),
            searchFilter: 'genre'
        });
    });
    it('SORT_FILTER should change field', () => {
        const result = movie(state, actions.sortFilter('rating'));
        expect(result.toJS()).toEqual({
            ...state.toJS(),
            sortFilter: 'rating'
        });
    });
});
