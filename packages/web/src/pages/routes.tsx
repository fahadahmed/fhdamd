import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Home/Home';

import {AppProvider} from '../components/AppProvider/AppContext';

function Routes(): JSX.Element {
  return(
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default Routes;