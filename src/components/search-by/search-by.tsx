import React, { FC } from 'react';
import classNames from 'classnames';
import { SearchToggleContainer } from 'containers/toggle-container';
import { ToggleData } from 'types/index';
import { Props } from './props';
import './search-by.scss';

export const SearchBy: FC<Props> = ({
    className,
    searchFilter,
    changeSearchFilter
}: Props) => {
    const resultClass: string = classNames('search-by', className);
    const searchByData: Array<ToggleData> = [
        { key: 'title', text: 'Title', onClick: f => f },
        { key: 'genres', text: 'Genre', onClick: f => f }
    ];
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <SearchToggleContainer
                changeFilterHistory={changeSearchFilter}
                name="search-by"
                data={searchByData}
                currentFilter={searchFilter}
            />
        </div>
    );
};
