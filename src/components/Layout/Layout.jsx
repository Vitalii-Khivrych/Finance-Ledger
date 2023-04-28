// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Header, Footer } from 'components';
// import { Header } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = { children: PropTypes.element.isRequired };
