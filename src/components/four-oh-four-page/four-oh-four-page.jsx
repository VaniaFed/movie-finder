import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const H1 = styled('h1')`
    color: red;
`;

export const FourOfFourPage = ({ className }) => {
    const resultClass = classNames(className, 'four-oh-four-page');
    const { asPath } = useRouter();
    return (
        <H1 className={resultClass}>
            {asPath} is not exist! Try to seek better!
        </H1>
    );
};
