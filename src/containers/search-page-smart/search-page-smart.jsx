import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';

const selectList = state => state.movie.list;

const selectSearchFilter = state => {
    return state.movie.searchFilter;
};

const selectSortFilter = state => {
    return state.movie.sortFilter;
};

const mapStateToProps = createSelector(
    selectList,
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
