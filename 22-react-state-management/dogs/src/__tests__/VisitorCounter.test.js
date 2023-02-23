import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisitorCounter from "../VisitorCounter";

test('displays visitor number', () => {
  render(<VisitorCounter numVisitors={58} />)
  const displayedVisitors =
    screen.getByText(/visitor number 58/i);
  expect(displayedVisitors).toBeVisible();
})

test('calls increment when moused over', () => {
  // create our spy
  const fakeIncrement = jest.fn();
  // send our spy into the component
  render(<VisitorCounter incrementNumVisitors={fakeIncrement} />)
  const displayedVisitors =
    screen.getByText(/visitor number/i);
    fireEvent.mouseOver(displayedVisitors);
  // ask the spy what happened
  expect(fakeIncrement).toHaveBeenCalledTimes(1);
  fireEvent.mouseOver(displayedVisitors);
  expect(fakeIncrement).toHaveBeenCalledTimes(2);
})
