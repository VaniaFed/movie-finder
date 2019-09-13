import React, { FC } from 'react';
import classNames from 'classnames';
import { SearchToggleContainer } from 'containers/toggle-container';
import { ToggleData } from 'types/index';
import { Props } from './props';
import './search-by.scss';

export const SearchBy: FC<Props> = ({
    className,
    searchBy,
    changeSearchBy
}: Props) => {
    const resultClass: string = classNames('search-by', className);
    const searchByData: ToggleData[] = [
        { key: 'title', text: 'Title', onClick: f => f },
        { key: 'genre', text: 'Genre', onClick: f => f }
    ];
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <SearchToggleContainer
                changeFilterHistory={changeSearchBy}
                name="search-by"
                data={searchByData}
                currentFilter={searchBy}
            />
        </div>
    );
};
