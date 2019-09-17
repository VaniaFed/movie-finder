import PropTypes, { InferProps } from 'prop-types';

const Types = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string,
    background: PropTypes.bool,
    onClick: PropTypes.func
};

export type Props = InferProps<typeof Types>;
