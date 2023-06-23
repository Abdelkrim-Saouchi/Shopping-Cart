import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import CartIcon from '../CartIcon';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    // user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

test('header renders in page', () => {
  //   const productsNumber = 0;
  //   const toggleCartMock = jest.fn();
  renderWithRouter(<Header />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

test('all nav links renders in the header', () => {
  renderWithRouter(<Header />);
  const navLinks = screen.getAllByRole('link');
  expect(navLinks.length).toBe(3);
  expect(navLinks[0].textContent).toMatch(/home/i);
  expect(navLinks[1].textContent).toMatch(/products/i);
  expect(navLinks[2].textContent).toMatch(/contact/i);
});

test('Cart icon renders in the page', () => {
  renderWithRouter(<CartIcon />);
  const cartIcon = screen.getByRole('img', { name: /cart icon/i });
  expect(cartIcon).toBeInTheDocument();
});

test('Cart icon renders correct products number', () => {
  const productsNumber = 1;
  renderWithRouter(<CartIcon productsNumber={productsNumber} />);
  const counter = screen.getByTestId('products-counter');
  expect(counter.textContent).toBe('1');
});

test('Cart icon calls toggleCart function', async () => {
  const mockToggleCart = jest.fn();
  const user = userEvent.setup();

  renderWithRouter(<CartIcon toggleCart={mockToggleCart} />);
  const icon = screen.getByRole('img', {
    name: /cart icon/i,
  });

  await user.click(icon);
  expect(mockToggleCart).toHaveBeenCalledTimes(1);
});
