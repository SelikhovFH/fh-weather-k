import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
