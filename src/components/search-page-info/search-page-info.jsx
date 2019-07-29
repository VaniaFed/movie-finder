import React from 'react';
import PropTypes from 'prop-types';
import { ToggleContainer } from 'components/toggle-container';
import './search-page-info.scss';

export const SearchPageInfo = ({ quantityMovies }) => {
    const sortByData = [
        { key: 'release date', text: 'Release date', onClick: f => f },
        { key: 'rating', text: 'Rating', onClick: f => f }
    ];
    return (
        <div className="search-page-info">
            <div className="search-page-info__left">
                <span className="search-page-info__text">
                    {quantityMovies} movies found
                </span>
            </div>
            <div className="search-page-info__right">
                <span className="search-page-info__text">Sort by</span>
                <ToggleContainer
                    className="search-page-info__toggleContainer"
                    name="sort-by"
                    data={sortByData}
                    checked="first"
                />
            </div>
        </div>
    );
};

SearchPageInfo.propTypes = {
    quantityMovies: PropTypes.number.isRequired
};
