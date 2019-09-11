import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushToHistory } from 'lib/push-to-history';
import { actions } from 'actions';
import { SearchBlock } from 'components/search-block';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';
import { ControlsData } from 'src/types';

export const SmartSearchBlock = ({
    sortFilter,
    setIsStartedLoading
}: {
    sortFilter: string;
    setIsStartedLoading(isStartedLoading: boolean): void;
}) => {
    const search = useSelector(searchValueSelector);
    const searchFilter = useSelector(searchFilterSelector);

    const dispatch = useDispatch();
    const fetchMoviesByData = (data: ControlsData) => {
        dispatch(actions.fetchMoviesByDataRequest(data));
    };

    const changeSearchValue = (value: string): void => {
        dispatch(actions.setSearchValue(value));
    };

    const findMovies = (data: ControlsData) => {
        setIsStartedLoading(true);
        fetchMoviesByData(data);
        pushToHistory({
            search,
            searchFilter,
            sortFilter
        });
    };
    return (
        <SearchBlock
            searchValue={search}
            onSearch={() => {
                const searchData: ControlsData = {
                    search,
                    searchFilter,
                    sortFilter
                };
                findMovies(searchData);
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
