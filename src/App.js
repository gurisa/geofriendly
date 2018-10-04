import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

import Dashboard from './layouts/Dashboard/Dashboard';
import SignIn from './layouts/Auth/Auth';
import SignUp from './layouts/Auth/SignUp/SignUp';
import Logout from './layouts/Auth/Logout/Logout';
import Public from './layouts/Public/Public';
import NotFound from './pages/Public/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/logout" component={Logout} />
            <Route axact path="/" component={Public} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);
