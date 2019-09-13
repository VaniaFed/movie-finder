import { shallow } from 'enzyme';
import { MovieCard } from './index';

const movie = {
    title: 'movei1',
    genres: 'action',
    tagline: 'some tagline',
    releaseDate: '2014',
    posterPath:
        'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
    id: 1
};

describe('<MovieCard />', () => {
    const tree = shallow(<MovieCard movie={movie} />);
    it('should be rendered with movie', () => {
        expect(tree).toMatchSnapshot();
    });
});
