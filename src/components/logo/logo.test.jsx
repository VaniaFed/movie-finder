import renderer from 'react-test-renderer';
import { Logo } from './index';

describe('<Logo />', () => {
    const tree = renderer.create(<Logo text="this is some logo" />).toJSON();
    it('should be rendered with text "this is some logo"', () => {
        expect(tree).toMatchSnapshot();
    });
});
