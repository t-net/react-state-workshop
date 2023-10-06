import React from 'react';
import Head from 'next/head';
import Products from "@/components/products";
import Layout from "@/components/layout";
import CartContextProvider from "@/providers/cart-context-provider";

const Home = () => (
  <>
    <Head>
      <title>Vehicle Parts Booker</title>
    </Head>

    <CartContextProvider>
      <Layout>
        <Products />
      </Layout>
    </CartContextProvider>
  </>
);

export default Home;
