import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBy } from 'components/search-by';
import { ToggleData } from 'types/index';
import { searchDataSelector } from 'selectors/search-data-selector';
import { actions } from 'actions/index';
import { Props } from './props';

export const SmartSearchBy = ({
    className,
    searchBy,
    changeSearchBy
}: Props) => {
    const dispatch = useDispatch();
    const controlsData = useSelector(searchDataSelector);
    const fetchMovies = () => {
        dispatch(actions.fetchMoviesByDataRequest(controlsData));
    };
    const searchByData: ToggleData[] = [
        { key: 'title', text: 'Title', onClick: f => f },
        { key: 'genre', text: 'Genre', onClick: f => f }
    ];
    return (
        <SearchBy
            className={className}
            changeSearchBy={changeSearchBy}
            searchBy={searchBy}
            searchByData={searchByData}
            fetchMovies={fetchMovies}
        />
    );
};
