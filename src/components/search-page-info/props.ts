import PropTypes, { InferProps } from 'prop-types';

const Types = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string,
    sortFilter: PropTypes.string,
    changeSortFilter: PropTypes.func
};

export type Props = InferProps<typeof Types>;
