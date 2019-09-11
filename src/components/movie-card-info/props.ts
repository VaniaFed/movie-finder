import PropTypes, { InferProps } from 'prop-types';
import { MoviePropTypes } from 'types/index';

const Types = {
    movie: PropTypes.shape(MoviePropTypes).isRequired,
    className: PropTypes.string
};

export type Props = InferProps<typeof Types>;
