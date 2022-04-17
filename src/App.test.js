import { render, screen } from '@testing-library/react';

import React from 'react';
import App from './App';

test('renders React Cauldron text', () => {
  render(<App />);
  const textElement = screen.getByText(/React Task Tracker/i);
  expect(textElement).toBeInTheDocument();
});
