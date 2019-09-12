import { Map } from 'immutable';
import { searchBySelector } from 'selectors/search-by-selector';

const state = {
    movie: Map({
        current: {},
        list: [{ id: 1, title: 'hello' }, { id: 2, title: 'hello 2' }],
        sameGenreList: [],
        error: '',
        searchBy: 'title',
        sortBy: 'release_date'
    })
};

test('should get correct value', () => {
    const searchBy = searchBySelector(state);
    expect(searchBy).toEqual(state.movie.toJS().searchBy);
});
