import React, { FC } from 'react';
import { Props } from './props';
import './not-found.scss';

export const NotFound: FC<Props> = ({ caption }: Props) => (
    <h2 className="not-found">{caption}</h2>
);

export default NotFound;
