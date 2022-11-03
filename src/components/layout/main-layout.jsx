import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
