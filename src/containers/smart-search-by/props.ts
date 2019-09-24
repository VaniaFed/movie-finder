import PropTypes, { InferProps } from 'prop-types';
import { SearchBy } from 'src/types';

const Types = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string,
    searchBy: PropTypes.string,
    changeSearchBy: PropTypes.func
};

export type Props = InferProps<typeof Types> & {
    searchBy: SearchBy;
};
