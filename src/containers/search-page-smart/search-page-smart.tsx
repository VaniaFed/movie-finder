import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { pushToHistory } from 'lib/push-to-history';
import { searchDataSelector } from 'selectors/search-data-selector';
import { listSelector } from 'selectors/list-selector';
import { changeSearch } from './changeSearch';
import { fetchMoviesByData } from './fetchMoviesByData';
import { changeSearchFilter } from './changeSearchFilter';
import { changeSortFilter } from './changeSortFilter';

export const SearchPageSmart = ({ location }) => {
    const [isStartedLoading, setIsStartedLoading] = useState(false);
    const controlsData = useSelector(searchDataSelector);
    const dispatch = useDispatch();

    const dispatchFetchMoviesByData = (
        searchValue: string,
        searchFilter: string,
        sortFilter: string
    ) => {
        dispatch(
            actions.fetchMoviesByDataRequest(
                searchValue,
                searchFilter,
                sortFilter
            )
        );
    };

    const dispatchSearch = (value: string) => {
        dispatch(actions.setSearchValue(value));
    };

    const dispatchChangeSearchFilter = (value: string) => {
        dispatch(actions.searchFilter(value));
    };

    const dispatchChangeSortFilter = (value: string) => {
        dispatch(actions.sortFilter(value));
    };

    const handleChangeSearch = changeSearch(dispatchSearch);
    const handleChangeSearchFilter = changeSearchFilter(
        dispatchChangeSearchFilter
    );
    const handleChangeSortFilter = changeSortFilter(dispatchChangeSortFilter);
    const sideEffects = () => {
        setIsStartedLoading(true);
    };
    const handleFetchMoviesByData = fetchMoviesByData(
        dispatchFetchMoviesByData
    )(sideEffects);

    const urlData = location;
    useEffect(() => {
        handleFetchMoviesByData(urlData, controlsData, isStartedLoading);
        handleChangeSearch(urlData, controlsData);
        handleChangeSearchFilter(urlData, controlsData);
        handleChangeSortFilter(urlData, controlsData);
    }, []);

    const list = useSelector(listSelector);
    useEffect(() => {
        if (isStartedLoading && list.length !== 0) {
            setIsStartedLoading(false);
        }
    });

    return (
        <SearchPage
            movies={list}
            searchValue={controlsData.searchValue}
            searchFilter={controlsData.searchFilter}
            sortFilter={controlsData.sortFilter}
            isStartedLoading={isStartedLoading}
            setIsStartedLoading={setIsStartedLoading}
            changeSortFilter={sortFilter => {
                const historyData = {
                    sortFilter
                };
                pushToHistory(historyData);
            }}
        />
    );
};
