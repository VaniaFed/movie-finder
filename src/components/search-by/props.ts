import PropTypes, { InferProps } from 'prop-types';

const Types = {
    className: PropTypes.string,
    searchFilter: PropTypes.string,
    changeSearchFilter: PropTypes.func
};

export type Props = InferProps<typeof Types>;
