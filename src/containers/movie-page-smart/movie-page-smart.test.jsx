import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { MoviePageSmart } from './index';

const store = configureStore();
describe('<MoviePageSmart />', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <MoviePageSmart />
            </Provider>
        )
        .toJSON();
    it('should render not found', () => {
        expect(tree).toMatchSnapshot();
    });
});
