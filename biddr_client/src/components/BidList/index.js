import React from 'react';
import BidDetails from '../BidDetails';

function BidList({ bids }) {
  return(
    <ul className="list">
      { bids && bids.map(bid => {
        return(
          <li key={bid.id}><BidDetails { ...bid }/></li>
        )
      })}
    </ul>
  )
}
export default BidList;