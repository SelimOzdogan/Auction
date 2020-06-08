import React, { Component } from 'react';
import { Auction } from "../../requests";

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: []
    }
  }

  componentDidMount() {
    Auction.index().then((auctions) => {
        this.setState((state) => {
          return {
            auctions,
            isLoading: false,
          };
        });
        console.log(auctions);
      });
  }

  render() {
    return (
      <div>
        <h1>Auction Index Page</h1>
        { this.state.auctions.map(a => {
          return(
            <li key={a.id}>
              <h2>{a.id} | {a.title}</h2>
              <small>{a.description}</small>
            </li>
          )
        }) }
      </div>
    )
  }
}

export default AuctionIndexPage