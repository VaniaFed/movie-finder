import PropTypes, { InferProps } from 'prop-types';

const Types = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

export type Props = InferProps<typeof Types>;
