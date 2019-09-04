import PropTypes, { InferProps } from 'prop-types';

const Types = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export type Props = InferProps<typeof Types>;
