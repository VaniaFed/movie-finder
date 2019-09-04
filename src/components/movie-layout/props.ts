import PropTypes, { InferProps } from 'prop-types';
import { MovieType } from 'types/index';

const Types = {
    movies: PropTypes.arrayOf(PropTypes.shape(MovieType))
};

export type Props = InferProps<typeof Types>;
