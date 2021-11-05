import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { get } from 'lodash';

interface PublicRouteProps {
  component?: any;
  path: string;
  exact: boolean;
}

const PublicRoute = ({
  component: Component,
  path,
  exact,
  ...rest
}: PublicRouteProps): React.ReactElement => {
  const isAuthenticated = useSelector((state) =>
    get(state, 'authReducer.isAuthenticated'),
  );
  return (
    <Route
      exact={exact}
      {...rest}
      path={path}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

export default React.memo(PublicRoute);
