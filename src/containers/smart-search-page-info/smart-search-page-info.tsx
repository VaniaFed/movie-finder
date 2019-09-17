import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPageInfo } from 'components/search-page-info';
import { searchDataSelector } from 'selectors/search-data-selector';
import { actions } from 'actions/index';

export const SmartSearchPageInfo = ({
    quantityMovies,
    className,
    sortBy,
    changeSortBy
}) => {
    const dispatch = useDispatch();
    const controlsData = useSelector(searchDataSelector);
    const fetchMovies = () => {
        dispatch(actions.fetchMoviesByDataRequest(controlsData));
    };
    return (
        <SearchPageInfo
            quantityMovies={quantityMovies}
            className={className}
            sortBy={sortBy}
            changeSortBy={changeSortBy}
            fetchMovies={fetchMovies}
        />
    );
};
