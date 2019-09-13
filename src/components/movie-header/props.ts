import PropTypes, { InferProps, string } from 'prop-types';

const Types = {
    className: PropTypes.string,
    urlParams: string
};

export type Props = InferProps<typeof Types>;
