import React from 'react';
import classNames from 'classnames';

import './searchInput.scss';

export const SearchInput = ({ className }) => (
    <input
        className={classNames('search-input', className)}
        type="text"
        placeholder="Game of Thrones"
    />
);
