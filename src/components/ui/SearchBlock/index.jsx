import React from 'react';
import { SearchInput } from 'Components/ui/SearchInput';
import { SearchByGroup } from 'Components/ui/SearchByGroup';

export const SearchBlock = ({ className }) => {
    return (
        <div className="search">
            <h3 className="search__title">Find your movie</h3>
            <SearchInput />
            <SearchByGroup />
        </div>
    );
};
