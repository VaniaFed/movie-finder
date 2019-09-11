import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { pushToHistory } from 'lib/push-to-history';
import { searchDataSelector } from 'selectors/search-data-selector';
import { listSelector } from 'selectors/list-selector';
import { ControlsData } from 'types/index';
import { changeSearch } from './changeSearch';
import { fetchMoviesByData } from './fetchMoviesByData';
import { changeSearchFilter } from './changeSearchFilter';
import { changeSortFilter } from './changeSortFilter';

interface Props {
    location: ControlsData;
}

export const SearchPageSmart = ({ location }: Props) => {
    const [isStartedLoading, setIsStartedLoading] = useState(false);
    const controlsData: ControlsData = useSelector(searchDataSelector);
    const dispatch = useDispatch();

    const dispatchFetchMoviesByData = (data: ControlsData) => {
        dispatch(actions.fetchMoviesByDataRequest(data));
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

    const urlData: ControlsData = location;

    useEffect(() => {
        handleFetchMoviesByData(urlData, controlsData, isStartedLoading);
        handleChangeSearch(urlData, controlsData);
        handleChangeSearchFilter(urlData, controlsData);
        handleChangeSortFilter(urlData, controlsData);
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
