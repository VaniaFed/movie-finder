import PropTypes, { InferProps } from 'prop-types';

const Types = {
    condition: PropTypes.bool.isRequired,
    content: PropTypes.func.isRequired,
    cap: PropTypes.node.isRequired
};

export type Props = InferProps<typeof Types>;
