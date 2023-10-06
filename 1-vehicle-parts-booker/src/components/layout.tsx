import React from 'react';
import Container from '@/components/styled/container';
import Header from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Container $padding={6}>
      {children}
    </Container>
  </>
);

export default Layout;
