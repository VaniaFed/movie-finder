import React from 'react';
import { SearchInput } from 'Components/ui/SearchInput';
import { SearchBy } from 'Components/ui/SearchBy';

import './searchBlock.scss';

export const SearchBlock = ({ className }) => {
    return (
        <div className="searchBlock">
            <h3 className="searchBlock__title">Find your movie</h3>
            <SearchInput />
            <SearchBy className="searchBlock__searchBy" />
        </div>
    );
};
