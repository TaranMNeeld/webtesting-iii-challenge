// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from '../display/Display';

test('defaults to unlocked and open', () => {
  const display = render(<Display />);
  display.getByText(/unlocked/i);
  display.getByText(/open/i);
});

test('displays if gate is unlocked or open', () => {
  const display = render(<Display locked={false} closed={false} />);
  display.getByText(/unlocked/i);
  display.getByText(/open/i);
})

test('displays if gate is locked or closed', () => {
  const display = render(<Display locked={true} closed={true} />);
  display.getByText(/locked/i);
  display.getByText(/closed/i);
})

test('button contains red-led class when locked and closed', () => {
  const display = render(<Display locked={true} closed={true} />);
  const locked = display.getByText(/locked/i);
  const closed = display.getByText(/closed/i);
  expect(locked.classList.contains('red-led')).toBe(true);
  expect(closed.classList.contains('red-led')).toBe(true);
})

test('button contains green-led class when unlocked and open', () => {
  const display = render(<Display locked={false} closed={false} />);
  const locked = display.getByText(/unlocked/i);
  const closed = display.getByText(/open/i);
  expect(locked.classList.contains('green-led')).toBe(true);
  expect(closed.classList.contains('green-led')).toBe(true);
})