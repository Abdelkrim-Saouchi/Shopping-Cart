import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import CartIcon from '../CartIcon';
import { HeaderContext } from '../HeaderContext';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

let providerProps = {
  value: { productsNumber: 2, toggleCart: jest.fn() },
};

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <HeaderContext.Provider {...providerProps}>{ui}</HeaderContext.Provider>,
    renderOptions
  );
};

describe('Header Component', () => {
  test('renders header with navigation links and cart icon', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('FutureStore')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('products-counter')).toBeInTheDocument();
  });
});

describe('CartIcon Component', () => {
  test('renders cart icon with products counter', () => {
    customRender(<CartIcon />, { providerProps });

    expect(screen.getByRole('img', { name: /cart icon/i })).toBeInTheDocument();
    expect(screen.getByTestId('products-counter')).toHaveTextContent('2');
  });

  test('calls toggleCart when cart icon is clicked', () => {
    customRender(<CartIcon />, { providerProps });

    const cartIcon = screen.getByTestId('cart-icon');
    fireEvent.click(cartIcon);

    expect(providerProps.value.toggleCart).toHaveBeenCalledTimes(1);
  });

  test('does not render products counter when productsNumber is 0', () => {
    providerProps = Object.assign(
      {},
      { value: { productsNumber: 0, toggleCart: jest.fn() } }
    );
    customRender(<CartIcon />, { providerProps });

    expect(screen.queryByTestId('products-counter')).toBeNull();
  });
});
