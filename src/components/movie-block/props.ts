import PropTypes, { InferProps } from 'prop-types';
import { MovieType } from 'types/index';

const Types = {
    movie: PropTypes.shape(MovieType).isRequired
};

export type Props = InferProps<typeof Types>;
