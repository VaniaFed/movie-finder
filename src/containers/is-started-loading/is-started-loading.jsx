import React, { useState } from 'react';

export const IsStartedLoading = ({ Component }) => {
    const [isStartedLoading, setIsStartedLoading] = useState(false);
    return (
        <Component
            isStartedLoading={isStartedLoading}
            setIsStartedLoading={setIsStartedLoading}
        />
    );
};
