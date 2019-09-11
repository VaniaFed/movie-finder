import PropTypes, { InferProps } from 'prop-types';

const Types = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number
        })
    })
};

export type Props = InferProps<typeof Types>;
