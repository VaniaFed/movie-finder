import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/configure-store';
import { BrowserRouter } from 'react-router-dom';
import { SearchPageSmart } from './index';

const store = configureStore();
describe('<SearchPageSmart />', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Provider store={store}>
                    <SearchPageSmart />
                </Provider>
            </BrowserRouter>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
