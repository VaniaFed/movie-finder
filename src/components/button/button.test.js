import { shallow } from 'enzyme';
import { Button } from './index';

describe('<Button />', () => {
    const component = shallow(<Button>Hello, React!</Button>);
    expect(
        component.find('button.search-block__btn-search button').length
    ).toBe(5);
});
