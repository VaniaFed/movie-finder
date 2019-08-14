import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/configure-store';
import { SearchBlockSmart } from './index';

const store = configureStore();
describe('<SearchBlockSmart />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchBlockSmart onSearch={f => f} />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
