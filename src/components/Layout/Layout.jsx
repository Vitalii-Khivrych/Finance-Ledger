import PropTypes from 'prop-types';

import { Header, Footer } from 'components';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
