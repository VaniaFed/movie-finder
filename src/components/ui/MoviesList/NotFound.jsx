import React from 'react';
import PropTypes from 'prop-types';

export const NotFound = ({ caption }) => (
    <h2 className="movies__notFound">{caption}</h2>
);

NotFound.propTypes = {
    caption: PropTypes.string.isRequired
};

export default NotFound;
