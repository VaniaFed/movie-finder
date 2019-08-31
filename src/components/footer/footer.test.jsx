import renderer from 'react-test-renderer';
import { Footer } from './index';

describe('<Footer />', () => {
    const tree = renderer.create(<Footer />).toJSON();
    it('should be rendered with text "netfixroulette"', () => {
        expect(tree).toMatchSnapshot();
    });
});
