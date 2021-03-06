import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButton } from 'components/toggle-button';
import { ToggleLayout } from 'components/toggle-layout';
import { actions } from 'actions/index';
import { SearchBy, SortBy } from 'types/index';
import { Props } from './props';

interface PropsHoc {
    name: string;
    background: boolean;
}

export const ToggleContainerHOC = ({ name, background }: PropsHoc) => {
    const ToggleContainer = ({
        data,
        currentFilter,
        changeFilterHistory,
        fetchMovies,
        changeFilter
    }: Props) => {
        const [checked, check] = useState(data[0].key);
        const onClick = (key: SearchBy | SortBy) => () => {
            check(key);
            changeFilter(key);
            fetchMovies(key);
            changeFilterHistory(key);
        };
        useEffect(() => {
            if (currentFilter !== checked) {
                onClick(currentFilter)();
            }
        }, [currentFilter]);
        const buttons = data.map(item => (
            <ToggleButton
                key={item.key}
                checked={item.key === checked}
                label={item.text}
                name={name}
                onClick={onClick(item.key)}
                background={background}
            />
        ));
        return <ToggleLayout>{buttons}</ToggleLayout>;
    };
    return ToggleContainer;
};

const ToggleSearchHoc = ToggleContainerHOC({
    name: 'search',
    background: true
});

export const SearchToggleContainer = (props: Props) => {
    const dispatch = useDispatch();
    const changeFilter = (by: SearchBy) => dispatch(actions.setSearchBy(by));
    return <ToggleSearchHoc {...props} changeFilter={changeFilter} />;
};

const ToggleSortHoc = ToggleContainerHOC({ name: 'sort', background: false });

export const SortToggleContainer = (props: Props) => {
    const dispatch = useDispatch();
    const changeFilter = (sortBy: SortBy) => {
        dispatch(actions.setSortBy(sortBy));
    };
    return <ToggleSortHoc {...props} changeFilter={changeFilter} />;
};
