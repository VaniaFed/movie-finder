import PropTypes, { InferProps } from 'prop-types';

const Types = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export type Props = InferProps<typeof Types>;
