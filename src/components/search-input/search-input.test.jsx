import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SearchInput } from './index';

const store = configureStore();

describe('<SearchInput />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchInput
                    search="harry"
                    className=""
                    onSearch={f => f}
                    onInput={f => f}
                />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
