import { Map } from 'immutable';
import { currentSelector } from './movie-page-smart';

const state = {
    movie: Map({
        current: {},
        list: [{ id: 1, title: 'hello' }, { id: 2, title: 'hello 2' }],
        sameGenreList: [],
        error: '',
        searchFilter: 'title',
        sortFilter: 'release_date'
    })
};

test('should get correct value', () => {
    const currentMovie = currentSelector(state);
    expect(currentMovie).toEqual(state.movie.toJS().current);
});
