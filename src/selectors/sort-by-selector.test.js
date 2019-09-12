import { Map } from 'immutable';
import { sortBySelector } from './sort-by-selector';

const state = {
    movie: Map({
        current: {},
        list: [{ id: 1, title: 'hello' }, { id: 2, title: 'hello 2' }],
        sameGenreList: [],
        error: '',
        sortBySelector: 'title',
        sortBy: 'release_date'
    })
};

test('should get correct value', () => {
    const sortBy = sortBySelector(state);
    expect(sortBy).toEqual(state.movie.toJS().sortBy);
});
