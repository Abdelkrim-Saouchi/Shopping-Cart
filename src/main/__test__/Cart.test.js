import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../Cart';

describe('Cart component', () => {
  const mockProps = {
    toggleCart: jest.fn(),
    cartList: [
      { id: 1, img: 'test1.jpg', name: 'Product 1', price: 9.99, quantity: 2 },
      { id: 2, img: 'test2.jpg', name: 'Product 2', price: 14.99, quantity: 1 },
    ],
    deleteProductFromCart: jest.fn(),
    total: 0,
    calculateTotal: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders shopping cart with products', () => {
    render(<Cart {...mockProps} />);

    expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Total: 0 $')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Cart is empty')).toBeNull();
  });

  test('renders cart as empty when cartList is empty', () => {
    render(<Cart {...mockProps} cartList={[]} />);

    expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Total: 0 $')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  test('calls deleteProductFromCart when delete button is clicked', () => {
    render(<Cart {...mockProps} />);

    const deleteButtons = screen.getAllByText('X');
    deleteButtons.forEach((button) => {
      button.click();
    });

    expect(mockProps.deleteProductFromCart).toHaveBeenCalledTimes(2);
    expect(mockProps.deleteProductFromCart).toHaveBeenCalledWith(1);
    expect(mockProps.deleteProductFromCart).toHaveBeenCalledWith(2);
  });

  test('calls toggleCart when Close button is clicked', () => {
    render(<Cart {...mockProps} />);

    const closeButton = screen.getByText('Close');
    closeButton.click();

    expect(mockProps.toggleCart).toHaveBeenCalled();
  });

  test('calculates total when cartList or total prop changes', () => {
    render(<Cart {...mockProps} />);

    expect(mockProps.calculateTotal).toHaveBeenCalled();
  });
});
