import React from 'react';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/ToggleButton';

export const SearchBy = () => {
    return (
        <div className="search__searchBy searchBy">
            <span className="searchBy__title">Search by</span>
            <ToggleContainer>
                <ToggleButton label="Title" />
                <ToggleButton label="Genre" />
            </ToggleContainer>
        </div>
    );
};
