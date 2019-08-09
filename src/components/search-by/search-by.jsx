import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SearchToggleContainer } from 'containers/toggle-container';
import './search-by.scss';

export const SearchBy = ({ className }) => {
    const resultClass = classNames('search-by', className);
    const searchByData = [
        { key: 'title', text: 'Title', onClick: f => f },
        { key: 'genres', text: 'Genre', onClick: f => f }
    ];
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <SearchToggleContainer name="search-by" data={searchByData} />
        </div>
    );
};

SearchBy.propTypes = {
    className: PropTypes.string
};
