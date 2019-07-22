import React from 'react';
import PropTypes from 'prop-types';

import './notFound.scss';

export const NotFound = ({ caption }) => (
    <h2 className="notFound">{caption}</h2>
);

NotFound.propTypes = {
    caption: PropTypes.string.isRequired
};

export default NotFound;
