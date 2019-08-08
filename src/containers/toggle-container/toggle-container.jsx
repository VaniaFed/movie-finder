import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleButton } from 'components/toggle-button';
import { ToggleLayout } from 'components/toggle-layout';
import { searchFilter } from 'actions/search-filter';
import { sortFilter } from 'actions/sort-filter';

export const ToggleContainerHOC = ({ name, background }) => {
    const ToggleContainer = ({ data, changeFilter }) => {
        const [checked, check] = useState(data[0].key);

        const onClick = key => () => {
            check(key);
            changeFilter(key);
        };
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
    ToggleContainer.propTypes = {
        data: PropTypes.arrayOf(PropTypes.string).isRequired,
        changeFilter: PropTypes.func.isRequired
    };
    return ToggleContainer;
};

export const SearchToggleContainer = connect(
    null,
    dispatch => ({ changeFilter: by => dispatch(searchFilter(by)) })
)(ToggleContainerHOC({ name: 'search', background: true }));

export const SortToggleContainer = connect(
    null,
    dispatch => ({ changeFilter: by => dispatch(sortFilter(by)) })
)(ToggleContainerHOC({ name: 'sort', background: false }));
