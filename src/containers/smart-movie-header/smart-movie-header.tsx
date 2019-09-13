import React from 'react';
import { useSelector } from 'react-redux';
import { stringify } from 'querystring';
import { MovieHeader } from 'components/movie-header';
import { searchDataSelector } from 'selectors/search-data-selector';
import { ControlsData } from 'types/index';

interface Props {
    className?: string;
}
export const SmartMovieHeader = ({ className }: Props) => {
    const controlsData: ControlsData = useSelector(searchDataSelector);

    const urlParams = stringify(controlsData);
    return <MovieHeader className={className} urlParams={urlParams} />;
};
