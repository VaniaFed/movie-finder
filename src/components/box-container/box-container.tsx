import React, { FC } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { Props } from './props';

const Div = styled.div`
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;
`;

export const BoxContainer: FC<Props> = ({
    children,
    className = ''
}: Props) => {
    const resultClass = classNames('container', className);
    return <Div className={resultClass}>{children}</Div>;
};
