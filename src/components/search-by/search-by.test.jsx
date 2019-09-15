import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SearchBy } from './index';

const store = configureStore();

const searchByData = [
    { key: 'title', text: 'Title', onClick: f => f },
    { key: 'genres', text: 'Genre', onClick: f => f }
];
describe('<SearchBy />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchBy searchByData={searchByData} />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
