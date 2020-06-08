import React from 'react'

function BidDetails({ id, created_at,bid, bidder }) {
  const fullName = bidder ? bidder.name : 'N/A';

  return(
    <div>
      <h4>{ bid } on { new Date(created_at).toLocaleDateString() } - by { fullName }
      </h4>
    </div>
  )
}

export default BidDetails