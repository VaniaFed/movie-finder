import React, { FC } from 'react';
import { Props } from './props';

export const ToggleLayout: FC<Props> = ({ children, className }: Props) => {
    return <div className={className}>{children}</div>;
};
