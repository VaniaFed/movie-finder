import React, { memo } from 'react';
import classNames from 'classnames';
import { SearchInput } from 'Components/ui/SearchInput';
import { SearchBy } from 'Components/ui/SearchBy';
import { Button } from 'Components/ui/button';
import { Logo } from 'Components/ui/Logo';

import './searchBlock.scss';

export const SearchBlock = memo(({ className }) => {
    const resultClass = classNames('searchBlock', className);
    return (
        <div className={resultClass}>
            <Logo className="searchBlock__logo">netfixroulette</Logo>
            <h3 className="searchBlock__title">Find your movie</h3>
            <SearchInput />
            <div className="searchBlock__controll">
                <SearchBy className="searchBlock__searchBy" />
                <Button className="searchBlock__btnSearch">Find</Button>
            </div>
        </div>
    );
});
