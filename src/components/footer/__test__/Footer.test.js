import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

test('renders homepage correctly', () => {
  const { container } = render(<Footer />, { wrapper: BrowserRouter });
  expect(container).toMatchSnapshot();
});
