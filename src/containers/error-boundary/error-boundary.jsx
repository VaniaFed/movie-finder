import React from 'react';

export class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}
