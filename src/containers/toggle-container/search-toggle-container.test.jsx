import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/configure-store';
import { SearchToggleContainer } from './index';

const store = configureStore();
test('<SearchToggleContainer />', () => {
    const sortByData = [
        { key: 'release_date', text: 'Release date', onClick: f => f },
        { key: 'rating', text: 'Rating', onClick: f => f }
    ];
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchToggleContainer
                    name="search"
                    background
                    data={sortByData}
                />
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
