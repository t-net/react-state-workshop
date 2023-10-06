import React from 'react';
import Head from 'next/head';
import Products from "@/components/products";
import Layout from "@/components/layout";

const Home = () => (
  <>
    <Head>
      <title>Vehicle Parts Booker</title>
    </Head>
    <Layout>
      <Products />
    </Layout>
  </>
);

export default Home;
