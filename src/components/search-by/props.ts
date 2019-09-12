import PropTypes, { InferProps } from 'prop-types';

const Types = {
    className: PropTypes.string,
    searchBy: PropTypes.string,
    changeSearchBy: PropTypes.func
};

export type Props = InferProps<typeof Types>;
