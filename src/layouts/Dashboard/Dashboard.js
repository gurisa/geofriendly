import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../../components/Dashboard/Navigation/Navigation';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {
  componentDidMount() {
    this.props.checkAuth();

    if (!this.props.token) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <Navigation onLogout={this.props.onLogout} />
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);