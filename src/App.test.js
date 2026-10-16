// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineShelf title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineShelf/i);
    expect(titleElement).toBeInTheDocument();
});
