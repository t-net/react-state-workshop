import React from 'react';
import Container from '@/components/styled/container';
import Header from "@/components/header";
import CartItem from "@/types/cart-item";

const Layout = ({ children, cartItems }: { children: React.ReactNode, cartItems: CartItem[] }) => (
  <>
    <Header cartItems={cartItems} />
    <Container $padding={6}>
      {children}
    </Container>
  </>
);

export default Layout;
