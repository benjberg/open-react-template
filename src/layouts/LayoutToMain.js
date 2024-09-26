import React from 'react';
import HeaderToMain from '../components/layout/HeaderToMain';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <HeaderToMain navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  