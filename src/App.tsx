import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LandingPage from './pages/Landing';
import AppStore from './store';

function App(): React.ReactElement {
  return (
    <Provider store={AppStore.store}>
      <PersistGate loading={null} persistor={AppStore.persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={LandingPage} />

            {/* Redirect when route not found */}
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
