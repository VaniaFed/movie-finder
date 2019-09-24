import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { BrowserRouter } from 'react-router-dom';
import { SearchPageSmart } from './index';

const store = configureStore();
const location = {
    search: '?search=hello?params=hi'
};
describe('<SearchPageSmart />', () => {
    const location = { search: '?search=harry&potter' };
    const tree = renderer
        .create(
            <BrowserRouter>
                <Provider store={store}>
                    <SearchPageSmart location={location} />
                </Provider>
            </BrowserRouter>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
