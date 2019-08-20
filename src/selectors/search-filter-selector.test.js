import { Map } from 'immutable';
import { searchFilterSelector } from './search-page-smart';

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
    const searchFilter = searchFilterSelector(state);
    expect(searchFilter).toEqual(state.movie.toJS().searchFilter);
});
