import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import '@testing-library/jest-dom';

test('renders Registration form component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Registration form/i);
    expect(linkElement).toBeInTheDocument();
});

