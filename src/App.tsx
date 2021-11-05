import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LandingPage from './pages/Landing';
import AppStore from './store';
import PrivateRoute from './components/Authentication/PrivateRoute';
// import PublicRoute from './components/Authentication/PublicRoute';

function App(): React.ReactElement {
  return (
    <Provider store={AppStore.store}>
      <PersistGate loading={null} persistor={AppStore.persistor}>
        <BrowserRouter>
          <Switch>
            {/* <PublicRoute
              exact
              isVerifyRoute
              path="/invite/:inviteToken"
              component={VerifyInvitation}
            /> */}
            <PrivateRoute exact path="/home" component={LandingPage} />

            {/* Redirect when route not found */}
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
