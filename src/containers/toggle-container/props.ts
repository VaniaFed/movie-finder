import PropTypes, { InferProps } from 'prop-types';
import { SearchBy, SortBy, ToggleData } from 'types/index';

const Types = {
    changeFilter: PropTypes.func,
    changeFilterHistory: PropTypes.func,
    fetchMovies: PropTypes.func
};

export type Props = InferProps<typeof Types> & {
    currentFilter: SearchBy | SortBy;
    data: ToggleData[];
};
