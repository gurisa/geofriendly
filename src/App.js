import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admin from './layouts/Admin/Admin';
import User from './layouts/User/User';
import NotFound from './pages/User/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route axact path="/" component={User} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
