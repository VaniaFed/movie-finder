import PropTypes, { InferProps } from 'prop-types';

const Types = {
    className: PropTypes.string
};

export type Props = InferProps<typeof Types>;
