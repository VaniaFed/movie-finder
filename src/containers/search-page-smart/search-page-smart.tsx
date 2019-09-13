import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPage } from 'components/search-page';
import { parse } from 'query-string';
import { actions } from 'actions';
import { pushToHistory } from 'lib/push-to-history';
import { searchDataSelector } from 'selectors/search-data-selector';
import { listSelector } from 'selectors/list-selector';
import { ControlsData } from 'types/index';
import { changeSearch } from './changeSearch';
import { fetchMoviesByData } from './fetchMoviesByData';
import { changeSearchBy } from './changeSearchBy';
import { changeSortBy } from './changeSortBy';

interface Props {
    location: ControlsData;
}

export const SearchPageSmart = ({ location }: Props) => {
    const [isStartedLoading, setIsStartedLoading] = useState(false);
    const dispatch = useDispatch();

    const dispatchFetchMoviesByData = (data: ControlsData) => {
        dispatch(actions.fetchMoviesByDataRequest(data));
    };

    const dispatchSearch = (value: string) => {
        dispatch(actions.setSearch(value));
    };

    const dispatchChangeSearchBy = (value: string) => {
        dispatch(actions.setSearchBy(value));
    };

    const dispatchChangeSortBy = (value: string) => {
        dispatch(actions.setSortBy(value));
    };

    const handleChangeSearch = changeSearch(dispatchSearch);
    const handleChangeSearchBy = changeSearchBy(dispatchChangeSearchBy);
    const handleChangeSortBy = changeSortBy(dispatchChangeSortBy);
    const sideEffects = () => {
        setIsStartedLoading(true);
    };
    const handleFetchMoviesByData = fetchMoviesByData(
        dispatchFetchMoviesByData
    )(sideEffects);

    const urlData: ControlsData = parse(location.search);
    const controlsData: ControlsData = useSelector(searchDataSelector);
    useEffect(() => {
        handleFetchMoviesByData(urlData, controlsData, isStartedLoading);
        handleChangeSearch(urlData, controlsData);
        handleChangeSearchBy(urlData, controlsData);
        handleChangeSortBy(urlData, controlsData);
    }, []);

    const movieList = useSelector(listSelector);
    useEffect(() => {
        if (isStartedLoading && movieList.length !== 0) {
            setIsStartedLoading(false);
        }
    });

    return (
        <SearchPage
            movies={movieList}
            sortBy={controlsData.sortBy}
            isStartedLoading={isStartedLoading}
            setIsStartedLoading={setIsStartedLoading}
            changeSortBy={sortBy => {
                const historyData = {
                    sortBy
                };
                pushToHistory(historyData);
            }}
        />
    );
};
