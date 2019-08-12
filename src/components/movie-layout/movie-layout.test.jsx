import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { MovieLayout } from './index';

describe('<MovieLayout />', () => {
    const movies = [];
    const tree = renderer
        .create(
            <MemoryRouter>
                <MovieLayout movies={movies} />
            </MemoryRouter>
        )
        .toJSON();
    it('should be rendered with movies', () => {
        expect(tree).toMatchSnapshot();
    });
});
