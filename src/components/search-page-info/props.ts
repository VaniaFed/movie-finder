import PropTypes, { InferProps } from 'prop-types';
import { SortBy } from 'src/types';

const Types = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string,
    changeSortBy: PropTypes.func,
    fetchMovies: PropTypes.func
};

export type Props = InferProps<typeof Types> & {
    sortBy: SortBy;
};
