import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser } = props;

  return (
    <div>
      <NavLink to='/auctions'>Auctions</NavLink>
      |
      <NavLink to='/auctions/new'>New Auction</NavLink>
      |
      <NavLink to='/sign_in'>Sign In</NavLink>
      |
      {/* {currentUser.name} */}
    </div>
  )
}

export default Navbar