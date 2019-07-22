import React from 'react';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/ToggleButton';
import classNames from 'classnames';

import './searchBy.scss';

export const SearchBy = ({ className }) => {
    const resultClass = classNames('searchBy', className);
    return (
        <div className={resultClass}>
            <span className="searchBy__title">Search by</span>
            <ToggleContainer>
                <ToggleButton label="Title" checked />
                <ToggleButton label="Genre" />
            </ToggleContainer>
        </div>
    );
};
