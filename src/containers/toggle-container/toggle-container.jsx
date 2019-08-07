import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleButton } from 'components/toggle-button';
import { ToggleLayout } from 'components/toggle-layout';
import { searchFilter } from 'actions/search-filter';
import { sortFilter } from 'actions/sort-filter';

const changeState = (name, value, searchFilter, sortFilter) => {
    if (name === 'search-by') {
        searchFilter(value);
    } else {
        sortFilter(value);
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSearchFilter: searchBy => {
            dispatch(searchFilter(searchBy));
        },
        changeSortFilter: sortBy => {
            dispatch(sortFilter(sortBy));
        }
    };
};

export const ToggleContainer = connect(
    null,
    mapDispatchToProps
)(({ data, name, background, changeSearchFilter, changeSortFilter }) => {
    const [checked, check] = useState(data[0].key);

    const buttons = data.map(item => (
        <ToggleButton
            key={item.key}
            checked={item.key === checked}
            label={item.text}
            name={name}
            onClick={() => {
                check(item.key);
                changeState(
                    name,
                    item.key,
                    changeSearchFilter,
                    changeSortFilter
                );
            }}
            background={background}
        />
    ));
    return <ToggleLayout>{buttons}</ToggleLayout>;
});

ToggleContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    background: PropTypes.string
};
