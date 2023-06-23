import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import CartIcon from '../CartIcon';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const mockProps = {
  productsNumber: 2,
  toggleCart: jest.fn(),
};

describe('Header Component', () => {
  test('renders header with navigation links and cart icon', () => {
    renderWithRouter(<Header {...mockProps} />);
    expect(screen.getByText('FutureStore')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('products-counter')).toBeInTheDocument();
  });

  test('calls toggleCart when cart icon is clicked', () => {
    renderWithRouter(<Header {...mockProps} />);

    const cartIcon = screen.getByTestId('cart-icon');
    fireEvent.click(cartIcon);

    expect(mockProps.toggleCart).toHaveBeenCalled();
  });
});

describe('CartIcon Component', () => {
  test('renders cart icon with products counter', () => {
    renderWithRouter(<CartIcon {...mockProps} />);
    expect(screen.getByRole('img', { name: /cart icon/i })).toBeInTheDocument();
    expect(screen.getByTestId('products-counter')).toHaveTextContent('2');
  });

  test('calls toggleCart when cart icon wrapper is clicked', () => {
    renderWithRouter(<CartIcon {...mockProps} />);

    const cartIconWrapper = screen.getByTestId('cart-icon-wrapper');
    fireEvent.click(cartIconWrapper);

    expect(mockProps.toggleCart).toHaveBeenCalled();
  });

  test('does not render products counter when productsNumber is 0', () => {
    render(<CartIcon {...mockProps} productsNumber={0} />);

    expect(screen.queryByTestId('products-counter')).toBeNull();
  });
});
