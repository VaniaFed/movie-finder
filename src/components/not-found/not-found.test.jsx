import renderer from 'react-test-renderer';
import { NotFound } from './index';

describe('<NotFound />', () => {
    const tree = renderer
        .create(<NotFound text="Not found we're so sorry..." />)
        .toJSON();
    it('should be rendered with text "Not found we\re so sorry..."', () => {
        expect(tree).toMatchSnapshot();
    });
});
