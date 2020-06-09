import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
  const {
    isAuthenticated = false,
    render,
    component: Component,
    ...restProps
  } = props;

  console.log(restProps);
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (isAuthenticated) {
          if (typeof render === 'function') {
            return render(routeProps);
          } else {
            return <Component {...routeProps} />
          }
        } else {
          return <Redirect to='/sign_in' />
        }
      }}
    />
  )
}

export default AuthRoute