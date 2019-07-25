import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchInput } from 'Components/search-input';
import { SearchBy } from 'Components/search-by';
import { Button } from 'Components/button';
import { Logo } from 'Components/logo';

import './search-block.scss';

export const SearchBlock = memo(({ className }) => {
    const resultClass = classNames('search-block', className);
    return (
        <div className={resultClass}>
            <Logo className="search-block__logo">netfixroulette</Logo>
            <h3 className="search-block__title">Find your movie</h3>
            <SearchInput />
            <div className="search-block__controll">
                <SearchBy className="search-block__search-by" />
                <Button className="search-block__btn-search">Find</Button>
            </div>
        </div>
    );
});
SearchBlock.propTypes = {
    className: PropTypes.string
};
