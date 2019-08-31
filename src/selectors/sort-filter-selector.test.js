import { Map } from 'immutable';
import { sortFilterSelector } from './sort-filter-selector';

const state = {
    movie: Map({
        current: {},
        list: [{ id: 1, title: 'hello' }, { id: 2, title: 'hello 2' }],
        sameGenreList: [],
        error: '',
        sortFilterSelector: 'title',
        sortFilter: 'release_date'
    })
};

test('should get correct value', () => {
    const sortFilter = sortFilterSelector(state);
    expect(sortFilter).toEqual(state.movie.toJS().sortFilter);
});
