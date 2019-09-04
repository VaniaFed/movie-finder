import PropTypes, { InferProps } from 'prop-types';
import { MovieType } from 'types/index';

const Types = {
    movie: PropTypes.shape(MovieType),
    className: PropTypes.string
};

export type Props = InferProps<typeof Types>;
