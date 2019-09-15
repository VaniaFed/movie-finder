import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SearchBy } from 'components/search-by'
import { ToggleData } from 'types/index';
import { searchDataSelector } from 'selectors/search-data-selector'
import { actions } from 'actions/index'

export const SmartSearchBy = ({
    className,
    searchBy,
    changeSearchBy,
}) => {
    const dispatch = useDispatch();
    const controlsData = useSelector(searchDataSelector);
    const fetchMovies = () => {
        dispatch(actions.fetchMoviesByDataRequest(controlsData))
    };
    const searchByData: ToggleData[] = [
        { key: 'title', text: 'Title', onClick: f => f },
        { key: 'genres', text: 'Genre', onClick: f => f }
    ];
    return (
        <SearchBy
            className={className}
            searchBy={searchBy}
            changeSearchBy={changeSearchBy}
            searchByData={searchByData}
            fetchMovies={fetchMovies}
        />
    )
}