import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parse } from 'query-string';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { isMap } from 'lib/is-map';
import { pushToHistory } from 'lib/push-to-history';
import { searchDataSelector } from 'selectors/search-data-selector';
import { listSelector } from 'selectors/list-selector';

export const SearchPageSmart = () => {
    const [isStartedLoading, setIsStartedLoading] = useState(false);
    const list = useSelector(listSelector);
    const controlsData = useSelector(searchDataSelector);
    const dispatch = useDispatch();

    const fetchMoviesByData = (searchValue, searchFilter, sortFilter) => {
        dispatch(
            actions.fetchMoviesByDataRequest(
                searchValue,
                searchFilter,
                sortFilter
            )
        );
    };
    const changeSearchValue = searchValue => {
        dispatch(actions.setSearchValue(searchValue));
    };
    const changeSearchFilter = searchFilter => {
        dispatch(actions.searchFilter(searchFilter));
    };
    const changeSortFilter = sortFilter => {
        dispatch(actions.sortFilter(sortFilter));
    };
    useEffect(() => {
        // FIXME: isomorfic instead of window
        // TODO: разделить в функции мб несколько useEffect
        const urlData = parse(window.location.search);
        const inputData = {
            search: controlsData.search,
            searchFilter: controlsData.searchFilter,
            sortFilter: controlsData.sortFilter
        };

        const shouldFetchMovies = !isMap(urlData, inputData);
        if (shouldFetchMovies && !isStartedLoading) {
            setIsStartedLoading(true);
            fetchMoviesByData(
                urlData.search,
                urlData.searchFilter,
                urlData.sortFilter
            );
        }
        const shouldChangeSearch = !isMap(urlData, inputData, ['search']);
        if (shouldChangeSearch) {
            changeSearchValue(urlData.search);
        }

        const shouldChangeSearchFilter = !isMap(urlData, inputData, [
            'searchFilter'
        ]);
        if (shouldChangeSearchFilter) {
            changeSearchFilter(urlData.searchFilter);
        }

        const shouldChangeSortFilter = !isMap(urlData, inputData, [
            'sortFilter'
        ]);
        if (shouldChangeSortFilter) {
            changeSortFilter(urlData.sortFilter);
        }
    });

    useEffect(() => {
        if (isStartedLoading && list.length !== 0) {
            setIsStartedLoading(false);
        }
    });
    return (
        <>
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
        </>
    );
};
