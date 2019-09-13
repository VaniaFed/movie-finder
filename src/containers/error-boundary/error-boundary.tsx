import React from 'react';

export class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError }: { hasError: boolean } = this.state;
        const { children }: { children: React.ReactNode } = this.props;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}
