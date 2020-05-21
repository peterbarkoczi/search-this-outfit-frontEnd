import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render App correctly', () => {
  const {queryByTestId} = render(<App />);

  expect(queryByTestId("app")).toBeTruthy();
});

