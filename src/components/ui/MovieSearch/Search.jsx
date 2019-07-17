import React from 'react';
import { SearchInput } from '../SearchInput';
import { ToggleContainer } from '../ToggleContainer';
import { ToggleButton } from '../ToggleButton';

export const Search = () => {
    return (
        <div className="search">
            <div className="search__group">
                <h3 className="search__title">Find your movie</h3>
                <SearchInput />
                <div className="search__searchBy">
                    <span className="searchBy__title">Search by</span>
                    <ToggleContainer>
                        <ToggleButton label="Title" />
                        <ToggleButton label="Genre" />
                    </ToggleContainer>
                </div>
            </div>
        </div>
    );
};
