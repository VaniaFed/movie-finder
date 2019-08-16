import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const FourOfFourPage = styled(({ className, location }) => {
    const resultClass = classNames(className, 'four-oh-four-page');
    const { pathname } = location;
    return (
        <h1 className={resultClass}>
            {pathname} is not exist! Try to seek better!
        </h1>
    );
})`
    font-weight: 400;
    padding: 410px 0;
    text-align: center;
`;
