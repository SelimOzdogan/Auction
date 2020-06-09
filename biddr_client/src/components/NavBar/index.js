import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser, signOut } = props;

  return (
    <div>
      <NavLink to='/auctions'>Auctions</NavLink>
      |
      <NavLink to='/auctions/new'>New Auction</NavLink>
      |
      {!currentUser && (
        <NavLink className="ui small blue button" to="/sign_in">
          Sign In
        </NavLink>
      )}
      {currentUser && (
        <>
          <span className="item">Hello {currentUser.name}</span>
          <NavLink className="ui small red button" to="/" onClick={signOut}>
            Sign Out
            </NavLink>
        </>
      )}
    </div>
  )
}

export default Navbar