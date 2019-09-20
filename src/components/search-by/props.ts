import PropTypes, { InferProps } from 'prop-types';
import { SearchBy, ToggleData } from 'types/index';

const Types = {
    className: PropTypes.string,
    changeSearchBy: PropTypes.func,
    fetchMovies: PropTypes.func
};

export type Props = InferProps<typeof Types> & {
    searchBy: SearchBy;
    searchByData: ToggleData[];
};
