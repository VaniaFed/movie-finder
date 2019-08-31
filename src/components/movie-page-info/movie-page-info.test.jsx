import renderer from 'react-test-renderer';
import { MoviePageInfo } from './index';

describe('<MoviePageInfo />', () => {
    const genres = ['action', 'drama'];
    const tree = renderer.create(<MoviePageInfo genres={genres} />).toJSON();
    it('should be rendered with genres', () => {
        expect(tree).toMatchSnapshot();
    });
});
