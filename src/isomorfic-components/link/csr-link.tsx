import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './props';

export const CSRLink = ({ children, as, href }: Props) => (
    <Link to={as || href}>{children}</Link>
);
