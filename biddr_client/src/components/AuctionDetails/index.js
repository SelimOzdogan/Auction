import React from 'react';

function AuctionDetails({ id, title, description, reserve_price, ends_at, bidder }) {
  let bidderName = bidder ? bidder.name : '';


  return(
    <div>
      <h2>{ title } </h2>
      <p>{ description }</p>
      <br></br>
      reserve Price: { reserve_price }
      <br></br>

      <small>Ends at: {new Date(ends_at).toLocaleString()}</small>
    </div>
  )
}

export default AuctionDetails
