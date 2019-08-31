import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './search-input.scss';

export const SearchInput = ({ searchValue, className, onSearch, onInput }) => (
    <div className={classNames('search-input', className)}>
        <input
            className="search-input__input"
            type="text"
            placeholder="Game of Thrones"
            value={searchValue}
            onInput={e => {
                onInput(e.currentTarget.value);
            }}
            data-input="search-input__input"
        />
        <button
            className="search-input__btnIcon"
            onClick={onSearch}
            type="button"
        />
    </div>
);

SearchInput.propTypes = {
    className: PropTypes.string
};
