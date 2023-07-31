import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

test('renders homepage correctly', () => {
  const { container } = render(<Home />, { wrapper: BrowserRouter });
  expect(container).toMatchSnapshot();
});
