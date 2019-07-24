import React from 'react';
import PropTypes from 'prop-types';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/toggle-button';
import './search-page--info.scss';

export const SearchPageInfo = ({ quantityMovies }) => {
    return (
        <div className="search-page--info">
            <div className="search-page--info__left">
                <span className="search-page--info__text">
                    {quantityMovies} movies found
                </span>
            </div>
            <div className="search-page--info__right">
                <span className="search-page--info__text">Sort by</span>
                <ToggleContainer className="search-page--info__toggleContainer">
                    <ToggleButton
                        label="release date"
                        className="toggle-button_noBg search-page--info__toggleButton"
                        checked="checked"
                        name="sortBy"
                    />
                    <ToggleButton
                        label="rating"
                        className="toggle-button_noBg search-page--info__toggleButton"
                        name="sortBy"
                    />
                </ToggleContainer>
            </div>
        </div>
    );
};

SearchPageInfo.propTypes = {
    quantityMovies: PropTypes.number.isRequired
};
