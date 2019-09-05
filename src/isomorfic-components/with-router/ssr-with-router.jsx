import React from 'react';
import { useRouter } from 'next/router';

export const SSRWithRouter = ({ children }) => {
    const router = useRouter();
    const Component = React.cloneElement(children, { router });
    return Component;
};
