import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import Contact from '../Contact';

test('renders homepage correctly', () => {
  const { container } = render(<Contact />, { wrapper: BrowserRouter });
  expect(container).toMatchSnapshot();
});
