import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import { MovieHeader } from './index';

describe('<MovieHeader />', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <MovieHeader />
            </MemoryRouter>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
