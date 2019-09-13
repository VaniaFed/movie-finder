import PropTypes, { InferProps } from 'prop-types';

const Types = {
    text: PropTypes.node.isRequired,
    className: PropTypes.string
};

export type Props = InferProps<typeof Types>;
