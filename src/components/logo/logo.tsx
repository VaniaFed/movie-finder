import React, { FC } from 'react';
import classNames from 'classnames';
import './logo.scss';
import { Props } from './props';

export const Logo: FC<Props> = ({ text, className }: Props) => {
    const resultClass: string = classNames(className, 'logo');
    return <h1 className={resultClass}>{text}</h1>;
};
