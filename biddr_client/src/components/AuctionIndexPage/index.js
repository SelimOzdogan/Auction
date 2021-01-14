import React, { Component } from 'react';
import { Auction } from "../../requests";
import { Link } from "react-router-dom";

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
        {this.state.auctions.map(auction => {
          return (
            <div key={auction.id} className="ui clearing">
              <h3 className="ui header">
                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
              </h3>
              <small>Posted on {new Date(auction.created_at).toLocaleDateString()}</small>

            </div>
          )
        })}
      </div>
    )
  }
}

export default AuctionIndexPage