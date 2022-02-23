import React from 'react';
import Navbar from '../component/Nav';

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
