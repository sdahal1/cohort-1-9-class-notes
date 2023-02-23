import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';

test('renders Dogs when page loads', () => {
  render(<Header />)
  const dogs = screen.getByText('Dogs');
  expect(dogs).toBeVisible();
  // it shouldn't show cats yet
  const cats = screen.queryByText('Cats');
  expect(cats).toBeNull();
})

test('renders Cats once header is clicked on', () => {
  render(<Header />);
  const dogs = screen.getByText('Dogs');
  // fire a fake click event on the header
  fireEvent.click(dogs);
  // go find something that says Cats & make sure it's visible
  const cats = screen.getByText('Cats');
  expect(cats).toBeVisible();
})