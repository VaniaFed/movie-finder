import renderer from 'react-test-renderer';
import { ToggleButton } from 'components/toggle-button';
import { ToggleLayout } from './index';

const data = [
    { key: 'hello_world', text: 'Hello world!' },
    { key: 'we_are_strong', text: 'We are stong' }
];
const buttons = data.map(item => (
    <ToggleButton
        key={item.key}
        checked={item.key}
        label={item.text}
        name="test"
        onClick={f => f}
        background
    />
));
describe('<ToggleLayout />', () => {
    const tree = renderer
        .create(<ToggleLayout>{buttons}</ToggleLayout>)
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
