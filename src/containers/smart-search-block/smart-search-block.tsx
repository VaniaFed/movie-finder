import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushToHistory } from 'lib/push-to-history';
import { actions } from 'actions';
import { SearchBlock } from 'components/search-block';
import { searchSelector } from 'selectors/search-selector';
import { searchBySelector } from 'selectors/search-by-selector';
import { ControlsData } from 'src/types';

export const SmartSearchBlock = ({
    sortBy,
    setIsStartedLoading
}: {
    sortBy: string;
    setIsStartedLoading(isStartedLoading: boolean): void;
}) => {
    const search = useSelector(searchSelector);
    const searchBy = useSelector(searchBySelector);

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
            changeSearchBy={searchBy => {
                pushToHistory({ searchBy });
            }}
            searchBy={searchBy}
        />
    );
};
