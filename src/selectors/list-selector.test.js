import { Map } from 'immutable';
import { movieSelector } from 'selectors/movie-selector';

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
    const movie = movieSelector(state);
    expect(movie.toJS()).toEqual(state.movie.toJS());
});
