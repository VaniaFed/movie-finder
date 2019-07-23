import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/ToggleButton';
import './searchBy.scss';

export const SearchBy = memo(({ className }) => {
    const resultClass = classNames('searchBy', className);
    return (
        <div className={resultClass}>
            <span className="searchBy__title">Search by</span>
            <ToggleContainer>
                <ToggleButton name="searchBy" label="Title" checked="checked" />
                <ToggleButton name="searchBy" label="Genre" />
            </ToggleContainer>
        </div>
    );
});
SearchBy.propTypes = {
    className: PropTypes.string
};
