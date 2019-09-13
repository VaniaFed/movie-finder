import PropTypes, { InferProps } from 'prop-types';

const Types = {
    caption: PropTypes.string.isRequired
};

export type Props = InferProps<typeof Types>;
