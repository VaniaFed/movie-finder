import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './notFound.scss';

export const NotFound = memo(({ caption }) => (
    <h2 className="notFound">{caption}</h2>
));

NotFound.propTypes = {
    caption: PropTypes.string.isRequired
};

export default NotFound;
