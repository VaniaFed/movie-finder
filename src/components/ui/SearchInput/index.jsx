import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './searchInput.scss';

export const SearchInput = ({ className }) => (
    <div className={classNames('search-input__wrapper', className)}>
        <input
            className={classNames('search-input', className)}
            type="text"
            placeholder="Game of Thrones"
        />
        <button className="search-input__btnIcon" type="button" />
    </div>
);

SearchInput.propTypes = {
    className: PropTypes.string
};
