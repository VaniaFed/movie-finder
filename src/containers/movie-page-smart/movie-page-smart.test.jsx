import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/configure-store';
import { MoviePageSmart } from './index';

const store = configureStore();
describe('<MoviePageSmart />', () => {
    const match = {
        params: { id: 5 }
    };
    const tree = renderer
        .create(
            <Provider store={store}>
                <MoviePageSmart match={match} />
            </Provider>
        )
        .toJSON();
    it('should be rendered', () => {
        expect(tree).toMatchSnapshot();
    });
});
