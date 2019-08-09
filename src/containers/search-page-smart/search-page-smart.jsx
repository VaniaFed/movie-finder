import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { listSelector } from 'selectors/listSelector';

const selectSearchFilter = state => {
    return state.movie.get('searchFilter');
};

const selectSortFilter = state => {
    return state.movie.get('sortFilter');
};

const mapStateToProps = createSelector(
    listSelector,
    selectSearchFilter,
    selectSortFilter,
    (list, searchFilter, sortFilter) => {
        return {
            list,
            searchFilter,
            sortFilter
        };
    }
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMoviesByData: (searchValue, searchFilter, sortFilter) => {
            dispatch(
                actions.fetchMoviesByDataRequest(
                    searchValue,
                    searchFilter,
                    sortFilter
                )
            );
        }
    };
};

export const SearchPageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ list, searchFilter, sortFilter, fetchMoviesByData }) => {
    return (
        <SearchPage
            movies={list}
            onSearch={value => {
                fetchMoviesByData(value, searchFilter, sortFilter);
            }}
        />
    );
});
