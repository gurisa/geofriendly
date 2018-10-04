import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Div from '../../hoc/Div/Div';

import Navigation from '../../components/Dashboard/Navigation/Navigation';

class Dashboard extends Component {
  render() {
    let redirectUrl = null;
    if (!this.props.token) {
      redirectUrl = <Redirect to='/signin' />
    }

    return (
      <Div>
        {redirectUrl}
        <Navigation onLogout={this.props.onLogout} />
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    expiredDate: state.expiredDate
  };
};

export default connect(mapStateToProps)(Dashboard);