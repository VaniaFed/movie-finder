import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;
`;
export const BoxContainer = ({ children, className }) => {
    const resultClass = classNames('container', className);
    return <Div className={resultClass}>{children}</Div>;
};
