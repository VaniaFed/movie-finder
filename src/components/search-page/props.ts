import PropTypes, { InferProps } from 'prop-types';
import { MovieType } from 'types/index';

const Types = {
    movies: PropTypes.arrayOf(PropTypes.shape(MovieType)),
    sortFilter: PropTypes.string,
    isStartedLoading: PropTypes.bool,
    setIsStartedLoading: PropTypes.func,
    changeSortFilter: PropTypes.func
};

export type Props = InferProps<typeof Types>;
