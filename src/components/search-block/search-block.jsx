import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchInput } from 'components/search-input';
import { SearchBy } from 'components/search-by';
import { Button } from 'components/button';
import { Logo } from 'components/logo';

import './search-block.scss';

export const SearchBlock = ({
    className,
    searchValue,
    onSearch,
    onInput,
    changeSearchFilter,
    searchFilter
}) => {
    const resultClass = classNames('search-block', className);
    return (
        <div className={resultClass}>
            <Logo text="netfixroulette" className="search-block__logo" />
            <h3 className="search-block__title">Find your movie</h3>
            <SearchInput
                searchValue={searchValue}
                onSearch={() => {
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
                    onClick={() => {
                        onSearch(searchValue);
                    }}
                    className="search-block__btn-search"
                />
            </div>
        </div>
    );
};
SearchBlock.propTypes = {
    className: PropTypes.string
};
