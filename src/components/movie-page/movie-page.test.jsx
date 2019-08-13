import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { MoviePage } from './index';

describe('<MoviePage />', () => {
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
    const tree = renderer
        .create(
            <MemoryRouter>
                <MoviePage movie={movie} />
            </MemoryRouter>
        )
        .toJSON();
    it('should be rendered with movie', () => {
        expect(tree).toMatchSnapshot();
    });
});
