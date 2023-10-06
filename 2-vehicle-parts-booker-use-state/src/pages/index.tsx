import React, { useState } from 'react';
import Head from 'next/head';
import Products from "@/components/products";
import Layout from "@/components/layout";
import CartItem from "@/types/cart-item";
import Product from "@/types/product";

const Home = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => setCartItems((prevCartItems) => {
    const existingIndex = prevCartItems.findIndex(item => item.product.id === product.id);
    if (existingIndex === -1) {
      const cartItem: CartItem = {
        product,
        quantity,
      };
      return [...prevCartItems, cartItem];
    }

      const cartItems: CartItem[] = [...prevCartItems];
      cartItems[existingIndex] = {
        product,
        quantity: quantity + prevCartItems[existingIndex].quantity,
      };

      return cartItems;
  });

  return (
    <>
      <Head>
        <title>Vehicle Parts Booker</title>
      </Head>
      <Layout cartItems={cartItems}>
        <Products addToCart={addToCart} />
      </Layout>
    </>
);
};

export default Home;
