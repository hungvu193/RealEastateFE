import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { get } from 'lodash';

interface PrivateRouteProps {
  component?: any;
  path: string;
  exact: boolean;
  // special route for verification will be allowed with both private and public route.
  isVerifyRoute?: boolean;
}

const PrivateRoute = ({
  component: Component,
  path,
  exact,
  isVerifyRoute,
  ...rest
}: PrivateRouteProps): React.ReactElement => {
  const isAuthenticated = useSelector((state) =>
    get(state, 'authReducer.isAuthenticated'),
  );
  return (
    <Route
      exact={exact}
      {...rest}
      path={path}
      render={(props) =>
        isAuthenticated || isVerifyRoute ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default React.memo(PrivateRoute);
