import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages';

describe('When rendering the layout and home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders the header', () => {
    expect(screen.getByText('Vehicle Parts Booker')).toBeVisible();
  });

  it('renders an empty cart', () => {
    expect(screen.getByText('No items have been added to your cart')).toBeVisible();
  });

  it('renders the products', () => {
    expect(screen.getByText('Jet Fuel Engine Turbo')).toBeVisible();
    expect(screen.getByText('The best thing you can get for your vehicle')).toBeVisible();
    expect(screen.getByText('Double Rainbow Window Wiper')).toBeVisible();
    expect(screen.getByText('Keep your windows shining bright')).toBeVisible();
    expect(screen.getByText('Grungy Exhaust Pipe')).toBeVisible();
    expect(screen.getByText('Pimp it up with the latest exhaust on the block')).toBeVisible();

    expect(screen.getAllByText('1')).toHaveLength(3);
  });

  it.skip('increases the count when clicking on plus', async () => {
    await userEvent.click(screen.getByTitle('Add more Jet Fuel Engine Turbo'));

    expect(screen.getAllByText('2')).toHaveLength(1);
    expect(screen.getAllByText('1')).toHaveLength(2);

    await userEvent.click(screen.getByTitle('Add more Double Rainbow Window Wiper'));
    await userEvent.click(screen.getByTitle('Add more Double Rainbow Window Wiper'));

    expect(screen.getAllByText('3')).toHaveLength(1);
    expect(screen.getAllByText('2')).toHaveLength(1);
    expect(screen.getAllByText('1')).toHaveLength(1);
  });

  it.skip('decreases the count with a minimum of 1 when clicking on minus ', async () => {
    await userEvent.click(screen.getByTitle('Add more Jet Fuel Engine Turbo'));
    await userEvent.click(screen.getByTitle('Add more Jet Fuel Engine Turbo'));

    expect(screen.getAllByText('3')).toHaveLength(1);

    await userEvent.click(screen.getByTitle('Add less Jet Fuel Engine Turbo'));
    await userEvent.click(screen.getByTitle('Add less Jet Fuel Engine Turbo'));

    expect(screen.getAllByText('1')).toHaveLength(3);
    expect(screen.getByTitle('Add less Jet Fuel Engine Turbo')).toBeDisabled();

    await userEvent.click(screen.getByTitle('Add less Jet Fuel Engine Turbo'));

    expect(screen.getAllByText('1')).toHaveLength(3);
  });

  it.skip('adds products to the cart', async () => {
    const cart = within(screen.getByTestId('cart'));

    await userEvent.click(screen.getByTitle('Add Jet Fuel Engine Turbo to cart'));

    expect(await cart.findByText('Jet Fuel Engine Turbo')).toBeVisible();
    expect(cart.getByText('The best thing you can get for your vehicle')).toBeVisible();
    expect(cart.getByText('1')).toBeVisible();
    expect(screen.queryByText('No items have been added to your cart')).not.toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Add more Grungy Exhaust Pipe'));
    await userEvent.click(screen.getByTitle('Add more Grungy Exhaust Pipe'));
    await userEvent.click(screen.getByTitle('Add more Grungy Exhaust Pipe'));
    await userEvent.click(screen.getByTitle('Add less Grungy Exhaust Pipe'));
    await userEvent.click(screen.getByTitle('Add Grungy Exhaust Pipe to cart'));

    expect(await cart.findByText('Grungy Exhaust Pipe')).toBeVisible();
    expect(cart.getByText('Pimp it up with the latest exhaust on the block')).toBeVisible();
    expect(cart.getByText('3')).toBeVisible();

    await userEvent.click(screen.getByTitle('Add Grungy Exhaust Pipe to cart'));
    await userEvent.click(screen.getByTitle('Add Jet Fuel Engine Turbo to cart'));

    expect(await cart.findByText('6')).toBeVisible();
    expect(await cart.findByText('2')).toBeVisible();
  });
});
