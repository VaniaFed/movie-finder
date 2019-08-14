import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/configure-store';
import { SearchPageSmart } from './index';

const store = configureStore();
describe('<SearchPageSmart />', () => {
    const match = {
        params: { id: 5 }
    };
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchPageSmart />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
