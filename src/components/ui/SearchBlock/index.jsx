import React from 'react';
import { SearchInput } from 'Components/ui/SearchInput';
import { SearchBy } from 'Components/ui/SearchBy';

import './searchBlock.scss';

export const SearchBlock = ({ className }) => {
    return (
        <div className="search">
            <h3 className="search__title">Find your movie</h3>
            <SearchInput />
            <SearchBy />
        </div>
    );
};
