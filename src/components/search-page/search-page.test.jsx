import renderer from 'react-test-renderer';
import { SearchPage } from './index';

describe('<SearchPage />', () => {
    const tree = renderer.create(<SearchPage movies={[]} />).toJSON();
    it('should be rendered with no movies', () => {
        expect(tree).toMatchSnapshot();
    });
});
