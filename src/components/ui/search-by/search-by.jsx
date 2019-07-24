import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/toggle-button';
import './search-by.scss';

export const SearchBy = memo(({ className }) => {
    const resultClass = classNames('search-by', className);
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <ToggleContainer>
                <ToggleButton
                    name="search-by"
                    label="Title"
                    checked="checked"
                />
                <ToggleButton name="search-by" label="Genre" />
            </ToggleContainer>
        </div>
    );
});
SearchBy.propTypes = {
    className: PropTypes.string
};
