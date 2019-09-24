import React from 'react';
import Link from 'next/link';
import { Props } from './props';

export const SSRLink = ({ children, href, as }: Props) => (
    <Link href={href} as={as}>
        <a>{children}</a>
    </Link>
);
