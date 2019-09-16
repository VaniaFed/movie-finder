import PropTypes, { InferProps } from 'prop-types';

const Types = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string,
    sortBy: PropTypes.string,
    changeSortBy: PropTypes.func,
    fetchMovies: PropTypes.func
};

export type Props = InferProps<typeof Types>;
