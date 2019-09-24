import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushToHistory } from 'lib/push-to-history';
import { actions } from 'actions/index';
import { SearchBlock } from 'components/search-block';
import { searchSelector } from 'selectors/search-selector';
import { searchBySelector } from 'selectors/search-by-selector';
import { ControlsData, SearchBy, SortBy } from 'src/types';

interface Props {
    sortBy: SortBy;
    setIsStartedLoading(isStartedLoading: boolean): void;
}

export const SmartSearchBlock = ({ sortBy, setIsStartedLoading }: Props) => {
    const search: string = useSelector(searchSelector);
    const searchBy: SearchBy = useSelector(searchBySelector);

    const dispatch = useDispatch();
    const fetchMoviesByData = (data: ControlsData) => {
        dispatch(actions.fetchMoviesByDataRequest(data));
    };

    const changeSearch = (value: string): void => {
        dispatch(actions.setSearch(value));
    };

    const findMovies = (data: ControlsData) => {
        setIsStartedLoading(true);
        fetchMoviesByData(data);
        pushToHistory({
            search,
            searchBy,
            sortBy
        });
    };
    return (
        <SearchBlock
            search={search}
            onSearch={() => {
                const searchData: ControlsData = {
                    search,
                    searchBy,
                    sortBy
                };
                findMovies(searchData);
            }}
            onInput={value => {
                changeSearch(value);
                pushToHistory({ search: value });
            }}
            changeSearchBy={value => {
                pushToHistory({ searchBy: value });
            }}
            searchBy={searchBy}
        />
    );
};
