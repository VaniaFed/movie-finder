import renderer from 'react-test-renderer';
import { MoviePageInfo } from './index';

describe('<MoviePageInfo />', () => {
    const tree = renderer.create(<MoviePageInfo quantityMovies={3} />).toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
