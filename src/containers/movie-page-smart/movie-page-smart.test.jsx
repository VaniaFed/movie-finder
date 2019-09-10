import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from 'src/store';
import { MoviePageSmart } from './index';

const store = configureStore();
describe('<MoviePageSmart />', () => {
    const match = {
        params: { id: 4 }
    };
    const tree = renderer
        .create(
            <Provider store={store}>
                <MoviePageSmart match={match} />
            </Provider>
        )
        .toJSON();
    it('should render not found', () => {
        expect(tree).toMatchSnapshot();
    });
});
