import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionIndexPage from '../AuctionIndexPage';
import AuctionNewPage from '../AuctionNewPage';
import AuctionShowPage from '../AuctionShowPage';
import SignInPage from '../SignInPage';
import WelcomePage from '../WelcomePage';
import NavBar from '../NavBar';
import { User, Session } from "../../requests";
import AuthRoute from "../AuthRoute";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    // this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    User.current()
      .then((data) => {
        this.setState((state) => {
          return {
            currentUser: data
          }
        });
      });
  }
  destroySession = () => {
    Session.destroy().then((data) => {
      this.setState({ currentUser: null });
    });
  };
  // handleSignIn(params) {
  //   Session.create(params).then((data) => {
  //     this.getCurrentUser()
  //   })
  // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            currentUser={this.state.currentUser}
            signOut={this.destroySession}
          />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path='/auctions' exact component={AuctionIndexPage} />
            <AuthRoute
              isAuthenticated={this.state.currentUser}
              component={AuctionNewPage}
              path="/auctions/new"
              style={{ color: "red", backgroundColor: "red" }}
            />
            <Route path="/auctions/:id" component={AuctionShowPage} />
            <Route path="/sign_in" render={(routeProps) => <SignInPage getCurrentUser={this.getCurrentUser} {...routeProps} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
