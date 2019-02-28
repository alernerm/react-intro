import React from 'react';

function Navbar() {
  return (
    <div>
      <a href="/todo">ToDo</a> &nbsp;|&nbsp; <a href="/products">Products</a>{' '}
      &nbsp;|&nbsp;
      <a href="/jokes">Jokes</a> &nbsp;|&nbsp;
      <a href="/myinfo">My Info</a> &nbsp;|&nbsp;
    </div>
  );
}

export default Navbar;
