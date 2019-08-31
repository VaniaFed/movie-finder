import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SearchBy } from './index';

const store = configureStore();

describe('<SearchBy />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchBy />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
