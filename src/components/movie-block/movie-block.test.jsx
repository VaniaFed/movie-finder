import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { MovieBlock } from './index';

const movie = {
    budget: 44000000,
    genres: ['Crime', 'Drama', 'Mystery', 'Western'],
    id: 273248,
    overview:
        'Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.',
    poster_path:
        'https://image.tmdb.org/t/p/w500/fqe8JxDNO8B8QfOGTdjh6sPCdSC.jpg',
    release_date: '2015-12-25',
    revenue: 155760117,
    runtime: 167,
    tagline: 'No one comes up here without a damn good reason.',
    title: 'The Hateful Eight',
    vote_average: 7.6,
    vote_count: 5584
};
const store = configureStore();
describe('<MovieBlock />', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <Provider store={store}>
                    <MovieBlock movie={movie} />
                </Provider>
            </MemoryRouter>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
