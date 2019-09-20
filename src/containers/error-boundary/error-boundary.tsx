import React, { Component } from 'react';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export class ErrorBoundary extends Component<Props> {
    state = { hasError: false };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError }: { hasError: boolean } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return children;
    }
}
