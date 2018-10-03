import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './layouts/Dashboard/Dashboard';
import Login from './layouts/Auth/Auth';
import Logout from './layouts/Auth/Logout/Logout';
import SignUp from './layouts/Auth/SignUp/SignUp';
import Public from './layouts/Public/Public';
import NotFound from './pages/Public/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignUp} />
            <Route axact path="/" component={Public} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
