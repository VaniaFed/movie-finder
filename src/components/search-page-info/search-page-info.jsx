import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SortToggleContainer } from 'containers/toggle-container';
import './search-page-info.scss';

export const SearchPageInfo = ({
    quantityMovies,
    className,
    sortFilter,
    changeSortFilter
}) => {
    const sortByData = [
        { key: 'release_date', text: 'Release date', onClick: f => f },
        { key: 'rating', text: 'Rating', onClick: f => f }
    ];
    const resultClass = classNames('search-page-info', className);
    return (
        <div className={resultClass}>
            <div className="search-page-info__left">
                <span className="search-page-info__text">
                    {quantityMovies} movies found
                </span>
            </div>
            <div className="search-page-info__right">
                <span className="search-page-info__text">Sort by</span>
                <SortToggleContainer
                    className="search-page-info__toggle-container"
                    name="sort-by"
                    changeFilterHistory={changeSortFilter}
                    currentFilter={sortFilter}
                    data={sortByData}
                />
            </div>
        </div>
    );
};

SearchPageInfo.propTypes = {
    quantityMovies: PropTypes.number.isRequired,
    className: PropTypes.string
};
