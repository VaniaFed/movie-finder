import React, { memo, useEffect, useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoviePage } from 'components/movie-page';
import { Preloader } from 'components/preloader';
import { YetLoader } from 'containers/yet-loader';
import { MovieLayout } from 'components/movie-layout/';
import { NotFound } from 'components/not-found';
import { actions } from 'actions/index';
import { currentSelector } from 'selectors/current-selector';
import { sameGenreListSelector } from 'selectors/same-genre-list-selector';
import { MovieType } from 'types/index';
import { Props } from './props';

export const MoviePageSmart: FC<Props> = memo(({ match }: Props) => {
    const dispatch = useDispatch();
    const fetchMovieById = (id: string) => {
        dispatch(actions.fetchMovieByIdRequest(id));
    };

    const movie: MovieType = useSelector(currentSelector);
    const moviesWithTheSameGenre: MovieType[] = useSelector(
        sameGenreListSelector
    );

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
            movie !== undefined &&
            'genres' in movie &&
            moviesWithTheSameGenre.length !== 0 &&
            isStartedLoading
        ) {
            setIsStartedLoading(false);
        }
    }, [movie, moviesWithTheSameGenre, isStartedLoading]);

    const FilmsNotFound = <NotFound caption="Film(s) not found" />;
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
                    cap={FilmsNotFound}
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
});
