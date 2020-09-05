import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  const fn = () => {
    return <div>Something</div>;
  };
  return (
    <>
      <section>Header here</section>
      {fn()}
      <main>{children}</main>
      <footer>Footer here</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
