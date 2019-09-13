import React, { FC } from 'react';
import classNames from 'classnames';
import { SortToggleContainer } from 'containers/toggle-container';
import { ToggleData } from 'types/index';
import { Props } from './props';
import './search-page-info.scss';

export const SearchPageInfo: FC<Props> = ({
    quantityMovies,
    className,
    sortBy,
    changeSortBy
}: Props) => {
    const sortByData: ToggleData[] = [
        { key: 'release_date', text: 'Release date', onClick: f => f },
        { key: 'rating', text: 'Rating', onClick: f => f }
    ];
    const resultClass: string = classNames('search-page-info', className);
    return (
        <div className={resultClass}>
            <div className="search-page-info__left">
                <span className="search-page-info__text">
                    {quantityMovies} movies found
                </span>
            </div>
            <div className="search-page-info__right">
                <span className="search-page-info__text">Sort by</span>
                <SortToggleContainer
                    className="search-page-info__toggle-container"
                    name="sort-by"
                    changeFilterHistory={changeSortBy}
                    currentFilter={sortBy}
                    data={sortByData}
                />
            </div>
        </div>
    );
};
