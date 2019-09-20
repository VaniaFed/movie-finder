import React, { FC } from 'react';
import classNames from 'classnames';
import { SearchInput } from 'components/search-input';
import { SmartSearchBy } from 'containers/smart-search-by';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { SearchBy } from 'src/types';
import { Props } from './props';

import './search-block.scss';

export const SearchBlock: FC<Props> = ({
    className,
    search,
    searchBy,
    onSearch,
    onInput,
    changeSearchBy
}: Props) => {
    const resultClass = classNames('search-block', className);
    const resultSearchBy: SearchBy = searchBy;
    return (
        <div className={resultClass}>
            <Logo text="netfixroulette" className="search-block__logo" />
            <h3 className="search-block__title">Find your movie</h3>
            <SearchInput
                search={search}
                onSearch={(): void => {
                    onSearch();
                }}
                onInput={onInput}
            />
            <div className="search-block__controll">
                <SmartSearchBy
                    changeSearchBy={changeSearchBy}
                    className="search-block__search-by"
                    searchBy={resultSearchBy}
                />
                <Button
                    text="Find"
                    onClick={(): void => {
                        onSearch(search);
                    }}
                    className="search-block__btn-search"
                />
            </div>
        </div>
    );
};
