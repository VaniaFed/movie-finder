import PropTypes, { InferProps } from 'prop-types';

const Types = {
    caption: PropTypes.string.isRequired,
    className: PropTypes.string,
    searchValue: PropTypes.string,
    searchFilter: PropTypes.string,
    onSearch: PropTypes.func,
    onInput: PropTypes.func,
    changeSearchFilter: PropTypes.func
};

export type Props = InferProps<typeof Types>;
