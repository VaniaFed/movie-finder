import React, { useState } from 'react';
import { SearchBlock } from 'components/search-block';

export const SearchBlockSmart = ({ className, onSearch }) => {
    const [searchValue, setValue] = useState('');
    return (
        <SearchBlock
            className={className}
            searchValue={searchValue}
            onSearch={onSearch}
            onInput={setValue}
        />
    );
};
