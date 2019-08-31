import renderer from 'react-test-renderer';
import { ToggleButton } from './index';

describe('<ToggleButton />', () => {
    const tree = renderer
        .create(
            <ToggleButton
                label="Some label"
                checked
                background
                name="some_name"
                onClick={f => f}
            />
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
