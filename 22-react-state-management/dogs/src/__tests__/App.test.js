import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders dogs header', () => {
  // render the component
  render(<App />)
  // grab the element I want to test
  const dogs = screen.getByText("Dogs");
  // check that it's there/visible/whatever I want to check
  expect(dogs).toBeVisible();
});
