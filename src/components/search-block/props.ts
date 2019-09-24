import PropTypes, { InferProps } from 'prop-types';
import { SearchBy } from 'src/types';

const Types = {
    caption: PropTypes.string.isRequired,
    className: PropTypes.string,
    search: PropTypes.string,
    searchBy: PropTypes.string,
    onSearch: PropTypes.func,
    onInput: PropTypes.func,
    changeSearchBy: PropTypes.func
};

export type Props = InferProps<typeof Types> & { searchBy: SearchBy };
