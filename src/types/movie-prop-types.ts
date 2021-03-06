import PropTypes from 'prop-types';

export const MoviePropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster_path: PropTypes.string.isRequired
};
