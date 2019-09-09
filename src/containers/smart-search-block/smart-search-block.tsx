import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushToHistory } from 'lib/push-to-history';
import { actions } from 'actions';
import { SearchBlock } from 'components/search-block';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';

export const SmartSearchBlock = ({ sortFilter, setIsStartedLoading }) => {
    const searchValue = useSelector(searchValueSelector);
    const searchFilter = useSelector(searchFilterSelector);

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
    const findMovies = searchValue => {
        setIsStartedLoading(true);
        fetchMoviesByData(searchValue, searchFilter, sortFilter);
        pushToHistory({
            search: searchValue,
            searchFilter,
            sortFilter
        });
    };
    return (
        <SearchBlock
            searchValue={searchValue}
            onSearch={searchValue => {
                findMovies(searchValue);
            }}
            onInput={value => {
                changeSearchValue(value);
                pushToHistory({ search: value });
            }}
            changeSearchFilter={searchFilter => {
                pushToHistory({ searchFilter });
            }}
            searchFilter={searchFilter}
        />
    );
};
