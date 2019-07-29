import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToggleContainer } from 'components/toggle-container';
import './search-by.scss';

export const SearchBy = memo(({ className }) => {
    const resultClass = classNames('search-by', className);
    const data = ['Title', 'Genre'];
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <ToggleContainer name="search-by" checked="first" data={data} />
        </div>
    );
});

SearchBy.propTypes = {
    className: PropTypes.string
};
