import React, { memo, useEffect, useState, FC } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { MoviePage } from 'components/movie-page';
import { Preloader } from 'components/preloader';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { actions } from 'actions';
import { currentSelector } from 'selectors/current-selector';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';
import { Props } from './props';

const mapStateToProps = createSelector(
    currentSelector,
    sameGenreListSelector,
    (current, list) => ({
        movie: current,
        moviesWithTheSameGenre: list
    })
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMovieById: id => {
            dispatch(actions.fetchMovieByIdRequest(id));
        }
    };
};

export const MoviePageSmart: FC<Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    memo(({ movie, moviesWithTheSameGenre, fetchMovieById, match }: Props) => {
        const { id } = match.params;
        const [isStartedLoading, setIsStartedLoading] = useState(false);
        useEffect(() => {
            if (!isStartedLoading) {
                setIsStartedLoading(true);
                fetchMovieById(id);
            }
        }, [id]);

        useEffect(() => {
            if (
                'genres' in movie &&
                moviesWithTheSameGenre.length !== 0 &&
                isStartedLoading
            ) {
                setIsStartedLoading(false);
            }
        }, [movie, moviesWithTheSameGenre, isStartedLoading]);

        const FilmsNotFound = () => <NotFound caption="Film(s) not found" />;
        return (
            <>
                {isStartedLoading ? (
                    <Preloader />
                ) : (
                    <YetLoader
                        condition={
                            typeof movie !== 'undefined' &&
                            'genres' in movie &&
                            typeof moviesWithTheSameGenre !== 'undefined' &&
                            moviesWithTheSameGenre.length !== 0
                        }
                        cap={<FilmsNotFound />}
                        content={() => (
                            <>
                                <MoviePage movie={movie} />
                                <MovieLayout movies={moviesWithTheSameGenre} />
                            </>
                        )}
                    />
                )}
            </>
        );
    })
);
