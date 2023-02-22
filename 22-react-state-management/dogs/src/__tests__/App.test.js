import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders dogs header', () => {
  render(<App />);
  const dogs = screen.getAllByText(/Dogs/i)[0];
  expect(dogs).toBeInTheDocument();
});
