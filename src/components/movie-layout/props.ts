import PropTypes, { InferProps } from 'prop-types';
import { MoviePropTypes } from 'types/index';

const Types = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropTypes))
};

export type Props = InferProps<typeof Types>;
