import React from 'react';
import { withRouter } from 'react-router';

export const CSRWithRouter = withRouter(({ children, router }) => {
    const Component = React.cloneElement(children, { router });
    return <Component />;
});
