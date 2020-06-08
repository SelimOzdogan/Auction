import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionIndexPage from '../AuctionIndexPage';
import AuctionNewPage from '../AuctionNewPage';
import SignInPage from '../SignInPage';
import WelcomePage from '../WelcomePage';
import NavBar from '../NavBar';
import { User } from "../../requests";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    User.current().then((data) => {
      this.setState((state) => {
        return {
          currentUser: data
        }
      });
    });
  }

  handleSignIn(params) {
    fetch(`http://localhost:3000/api/v1/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.getCurrentUser()
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path='/auctions' exact component={AuctionIndexPage} />
            {/* <Route path='/auctions/new' component={AuctionNewPage} /> */}
            <Route path='/sign_in' render={(routeProps) => <SignInPage handleSignIn={this.handleSignIn} {...routeProps} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
