import PropTypes, { InferProps } from 'prop-types';
import { ToggleDataPropTypes } from 'types/index';

const Types = {
    className: PropTypes.string,
    searchBy: PropTypes.string,
    changeSearchBy: PropTypes.func,
    fetchMovies: PropTypes.func,
    searchByData: PropTypes.shape(ToggleDataPropTypes).isRequired
};

export type Props = InferProps<typeof Types>;
