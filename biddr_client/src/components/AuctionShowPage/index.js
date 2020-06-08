import React, { Component } from 'react'
import AuctionDetails from '../AuctionDetails';
import BidList from '../BidList';
import { Auction } from '../../requests';

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: {}
    }
    // this.createBid = this.createBid.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);

    Auction.one(this.props.match.params.id).then((auction) => {
      this.setState((state) => {
        return {
          auction
        };
      });
      console.log(auction);
    });
  }

  // createBid(id) {
  //   this.setState((state) => {
  //     return {
  //       auction: {
  //         ...state.auction,
  //         bids: state.auction.bids.filter((r) => {
  //           return r.id !== id;
  //         })
  //       }
  //     }
  //   })
  // }

  render() {
    const { id, title, description, ends_at, bidder, bid, reserve_price } = this.state.auction;
    return (
      <main className='page'>
        {
          id ?
            <AuctionDetails
              id={id}
              title={title}
              reserve_price={reserve_price}
              description={description}
              ends_at={ends_at}
              bidder={bidder}
            /> :
            <div>Auction is loading...</div>
        }
        <div> Previous Bids </div>
        <BidList bids={bid} />
      </main>
    )
  }
}


export default AuctionShowPage