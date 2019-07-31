import renderer from 'react-test-renderer';
import { v4 } from 'uuid';
import { MovieCard } from './index';

const movie = {
    title: 'movei1',
    genres: 'action',
    tagline: 'some tagline',
    releaseDate: '2014',
    posterPath:
        'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
    id: v4()
};

describe('<SearchPage />', () => {
    const tree = renderer.create(<MovieCard movie={movie} />).toJSON();
    it('should be rendered with no movies', () => {
        expect(tree).toMatchSnapshot();
    });
});
