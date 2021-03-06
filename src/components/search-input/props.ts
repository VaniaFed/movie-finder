import PropTypes, { InferProps } from 'prop-types';

const Types = {
    search: PropTypes.string,
    className: PropTypes.string,
    onSearch: PropTypes.func,
    onInput: PropTypes.func
};

export type Props = InferProps<typeof Types>;
