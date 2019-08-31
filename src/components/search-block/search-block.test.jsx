import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { SearchBlock } from './index';

const store = configureStore();

describe('<SearchBlock />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <SearchBlock
                    searchValue="harry potter"
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
