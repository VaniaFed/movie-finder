import React from 'react';
import PropTypes from 'prop-types';
import './not-found.scss';

export const NotFound = ({ caption }) => (
    <h2 className="not-found">{caption}</h2>
);

NotFound.propTypes = {
    caption: PropTypes.string.isRequired
};

export default NotFound;
