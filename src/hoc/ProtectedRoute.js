import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, currentUser, loginUser, ...rest }) => {
  const history = useHistory();

  return (
    <Route {...rest} render={
      props => {
          if (!currentUser) {
            return <Component loginUser={loginUser} {...rest} {...props} /> 
          }
          else {
              return <Redirect to={
                {
                  pathname: history.goBack(),
                  // pathname: '/',
                  state: {
                    from: props.location
                  }
                }
              } />
          }
      } 
    } />
  )
}

export default ProtectedRoute;