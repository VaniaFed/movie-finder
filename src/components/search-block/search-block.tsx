import React, { FC } from 'react';
import classNames from 'classnames';
import { SearchInput } from 'components/search-input';
import { SearchBy } from 'components/search-by';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { Props } from './props';

import './search-block.scss';

export const SearchBlock: FC<Props> = ({
    className,
    searchValue,
    searchFilter,
    onSearch,
    onInput,
    changeSearchFilter
}: Props) => {
    const resultClass = classNames('search-block', className);
    return (
        <div className={resultClass}>
            <Logo text="netfixroulette" className="search-block__logo" />
            <h3 className="search-block__title">Find your movie</h3>
            <SearchInput
                searchValue={searchValue}
                onSearch={(): void => {
                    onSearch(searchValue);
                }}
                onInput={onInput}
            />
            <div className="search-block__controll">
                <SearchBy
                    changeSearchFilter={changeSearchFilter}
                    className="search-block__search-by"
                    searchFilter={searchFilter}
                />
                <Button
                    text="Find"
                    onClick={(): void => {
                        onSearch(searchValue);
                    }}
                    className="search-block__btn-search"
                />
            </div>
        </div>
    );
};
