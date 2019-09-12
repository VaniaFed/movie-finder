import { Map } from 'immutable';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';

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
    const sameGenreList = sameGenreListSelector(state);
    expect(sameGenreList).toEqual(state.movie.toJS().sameGenreList);
});
