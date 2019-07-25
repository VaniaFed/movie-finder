import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './not-found.scss';

export const NotFound = memo(({ caption }) => (
    <h2 className="not-found">{caption}</h2>
));

NotFound.propTypes = {
    caption: PropTypes.string.isRequired
};

export default NotFound;
