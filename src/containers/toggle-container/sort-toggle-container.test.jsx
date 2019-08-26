import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SortToggleContainer } from './index';

const store = configureStore();
describe('<SortToggleContainer />', () => {
    const searchByData = [
        { key: 'release_date', text: 'Release date', onClick: f => f },
        { key: 'rating', text: 'Rating', onClick: f => f }
    ];
    const tree = renderer
        .create(
            <Provider store={store}>
                <SortToggleContainer
                    name="search"
                    background
                    data={searchByData}
                />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
