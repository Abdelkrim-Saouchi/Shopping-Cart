import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../../components/main/Card';
import { ProductsContext } from '../../contexts/ProductsContext';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

let providerProps = {
  value: { addProductToCart: jest.fn(), deleteProductFromCart: jest.fn() },
};

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <ProductsContext.Provider {...providerProps}>
      {ui}
    </ProductsContext.Provider>,
    renderOptions
  );
};

describe('Card Component', () => {
  const mockProps = {
    id: 1,
    imgSrc: 'img.jpg',
    productName: 'product',
    price: 10,
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Card renders product info correctly', () => {
    const { container } = renderWithRouter(<Card {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('increments quantity when increment button is clicked', () => {
    renderWithRouter(<Card {...mockProps} />);

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    expect(screen.getByTestId('product_quantity').value).toBe('1');
  });

  test('decrements quantity when decrement button is clicked', () => {
    renderWithRouter(<Card {...mockProps} />);

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByTestId('product_quantity').value).toBe('0');
  });

  test('calls addProductToCart when Add to Cart button is clicked with quantity > 0', () => {
    customRender(<Card {...mockProps} />, { providerProps });
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(providerProps.value.addProductToCart).toHaveBeenCalledWith(
      1,
      'product',
      'img.jpg',
      10,
      1
    );
  });

  test('calls deleteProductFromCart when Add to Cart button is clicked with quantity > 0 and already added', () => {
    customRender(<Card {...mockProps} />, { providerProps });
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    const addedToCartButton = screen.getByText('Added to Cart');
    fireEvent.click(addedToCartButton);

    expect(providerProps.value.deleteProductFromCart).toHaveBeenCalledWith(1);
  });

  test('calls deleteProductFromCart when Add to Cart button is clicked with quantity = 0 and already added', () => {
    customRender(<Card {...mockProps} />, { providerProps });

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    const addedToCartButton = screen.getByText('Added to Cart');
    fireEvent.click(addedToCartButton);

    expect(providerProps.value.deleteProductFromCart).toHaveBeenCalledWith(1);
  });

  test('does not call addProductToCart or deleteProductFromCart when Add to Cart button is clicked with quantity = 0 and not added', () => {
    customRender(<Card {...mockProps} />, { providerProps });
    const addToCartButton = screen.getByText('Add to Cart');
    const quantityInput = screen.getByTestId('product_quantity');

    fireEvent.change(quantityInput, { target: { value: '0' } });
    fireEvent.click(addToCartButton);

    expect(providerProps.value.addProductToCart).not.toHaveBeenCalled();
    expect(providerProps.value.deleteProductFromCart).not.toHaveBeenCalled();
  });
});
