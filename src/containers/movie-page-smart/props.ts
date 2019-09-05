import PropTypes, { InferProps } from 'prop-types';
import { MovieType } from 'types/index';

const Types = {
    movie: PropTypes.shape(MovieType),
    moviesWithTheSameGenre: PropTypes.arrayOf(PropTypes.shape(MovieType)),
    fetchMovieById: PropTypes.func
};

export type Props = InferProps<typeof Types>;
