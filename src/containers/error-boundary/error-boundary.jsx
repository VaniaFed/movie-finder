import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('error: ', error);
        console.log('error: ', info);
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}