import PropTypes, { InferProps } from 'prop-types';
import { MoviePropTypes, SortBy } from 'types/index';

const Types = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropTypes)),
    isStartedLoading: PropTypes.bool,
    setIsStartedLoading: PropTypes.func,
    changeSortBy: PropTypes.func
};

export type Props = InferProps<typeof Types> & {
    sortBy: SortBy;
};
