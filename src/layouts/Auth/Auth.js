import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';

import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
  state = {
    loginForm: {
      username: {
        id: 'username',
        value: '',
        isValid: false,
        warning: {
          status: false,
          text: 'Mohon masukkan username Anda.'
        },
        failedText: 'Username tidak terdaftar.',
        isActive: true
      },
      password: {
        id: 'password',
        value: '',
        isValid: false,
        warning: {
          status: false,
          text: 'Mohon masukkan password Anda.'
        },
        failedText: 'Password salah. Silahkan coba lagi.',
        isActive: false
      }
    },
    formIsValid: false,
    redirectUrl: null
  }

  componentDidMount() {
    this.props.errorReset();
  }

  inputChangedHandler = (e, id) => {
    const updatedLoginForm = {
      ...this.state.loginForm
    }
    const updatedElementForm = {
      ...updatedLoginForm[id]
    }
    updatedElementForm.value = e.target.value;
    updatedElementForm.isValid = updatedElementForm.value !== '';
    updatedElementForm.warning.status = updatedElementForm.value === '';
    updatedLoginForm[id] = updatedElementForm;

    let formIsValid = true;

    for (let id in updatedLoginForm) {
      formIsValid = updatedLoginForm[id].isValid && formIsValid;
    }

    this.setState({
      loginForm: updatedLoginForm,
      formIsValid: formIsValid
    });
  }

  submitLoginHandler = () => {
    if (this.state.formIsValid) {
      this.props.onAuth(this.state.loginForm.username.value, this.state.loginForm.password.value);
    } else {
      const loginForm = { ...this.state.loginForm };

      if ((loginForm.username.value === '') && (loginForm.password.value === '')) {
        loginForm.username.warning.status = true;
        loginForm.password.warning.status = true;
      } else if (loginForm.username.value === '') {
        loginForm.username.warning.status = true;
      } else if (loginForm.password.value === '') {
        loginForm.password.warning.status = true;
      }

      this.setState({loginForm: loginForm});
    }
  }

  enteredHandler = e => {
    if (e.key === 'Enter') {
      this.submitLoginHandler();
    }
  }

  render() {
    // warning alert
    const usernameWarning = { ...this.state.loginForm.username.warning }; 
    const passwordWarning = { ...this.state.loginForm.password.warning };

    // textfiels is active
    const passwordIsActive = this.state.loginForm.password.isActive;

    let authRedirect = null;
    if (this.props.token) {
      authRedirect = <Redirect to='/dashboard' />
    }

    return (
      <div className={classes.login}>
        <div className={classes.loginBox}>
          <Typography className={classes.title} variant="display1">
            GeoFriendly
          </Typography>
          <Typography className={classes.subheading} variant="subheading">
            Welcome back! Please login to your account.
          </Typography>
          
          {authRedirect}
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id={this.state.loginForm.username.id}
              label={this.state.loginForm.username.id}
              helperText={usernameWarning.status 
                ? usernameWarning.text 
                : this.props.error === 'Username does not exist.' 
                  ? this.state.loginForm.username.failedText 
                  : null}
              error={usernameWarning.status 
                ? true 
                : this.props.error === 'Username does not exist.' 
                  ? true 
                  : false}
              margin="normal"
              autoFocus={this.state.loginForm.username.isActive}
              className={classes.textfield}
              onChange={(e) => this.inputChangedHandler(e, this.state.loginForm.username.id)}
            />
            <TextField
              id={this.state.loginForm.password.id}
              label={this.state.loginForm.password.id}
              helperText={passwordWarning.status 
                ? passwordWarning.text 
                : this.props.error === 'Username or password is wrong.' 
                  ? this.state.loginForm.password.failedText 
                  : null}
              error={passwordWarning.status 
                ? true 
                : this.props.error === 'Username or password is wrong.' 
                  ? true 
                  : false}
              className={classes.textfield}
              type="password"
              autoComplete="current-password"
              margin="normal"
              autoFocus={passwordIsActive}
              onChange={(e) => this.inputChangedHandler(e, this.state.loginForm.password.id)}
              onKeyPress={this.enteredHandler}
            />

            <FormGroup row>
              <FormControlLabel className="FormControlLabel"
                control={
                  <Checkbox
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </FormGroup>

            <div className={classes.buttonGroup}>
              <Button 
                variant="contained" 
                color="inherit" 
                style={{backgroundColor: '#43425D', color: '#fff'}}
                onClick={this.submitLoginHandler}
              >
                Submit
              </Button>
              
              <Link
                to='/signup'
                className={classes.link}
              >
                <Button
                  variant="contained" 
                  color="inherit" 
                  style={{backgroundColor: '#fff', color: '#43425D', border: '1px solid #43425D'}}
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            <Link to='/'>
              <Typography>
                Cancel your login? Back to home
              </Typography>
            </Link>
          </form>
          
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.auth(username, password)),
    errorReset: () => dispatch(actions.errorReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);