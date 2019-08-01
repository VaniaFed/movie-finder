import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './search-input.scss';

export const SearchInput = ({ className }) => (
    <div className={classNames('search-input', className)}>
        <input
            className="search-input__input"
            type="text"
            placeholder="Game of Thrones"
        />
        <button className="search-input__btnIcon" type="button" />
    </div>
);

SearchInput.propTypes = {
    className: PropTypes.string
};
