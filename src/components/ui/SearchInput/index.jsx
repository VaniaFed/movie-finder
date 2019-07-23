import React from 'react';
import classNames from 'classnames';

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
