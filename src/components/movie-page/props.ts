import PropTypes, { InferProps } from 'prop-types';
import { MoviePropTypes } from 'types/index';

const Types = {
    movie: PropTypes.shape(MoviePropTypes)
};

export type Props = InferProps<typeof Types>;
