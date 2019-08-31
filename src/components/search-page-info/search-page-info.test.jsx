import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SearchPageInfo } from './index';

const store = configureStore();
describe('<SearchPageInfo />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchPageInfo quantityMovies={3} />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
