import React, { FC } from 'react';
import classNames from 'classnames';
import { SearchToggleContainer } from 'containers/toggle-container';
import { Props } from './props';
import './search-by.scss';

export const SearchBy: FC<Props> = ({
    className,
    searchBy,
    changeSearchBy,
    fetchMovies,
    searchByData
}: Props) => {
    const resultClass: string = classNames('search-by', className);
    return (
        <div className={resultClass}>
            <span className="search-by__title">Search by</span>
            <SearchToggleContainer
                changeFilterHistory={changeSearchBy}
                name="search-by"
                data={searchByData}
                currentFilter={searchBy}
                fetchMovies={fetchMovies}
            />
        </div>
    );
};
