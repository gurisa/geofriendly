import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';

import classes from './SignUp.css';

class Login extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className={classes.login}>
        <div className={classes.loginBox}>
          <Typography className={classes.title} variant="display1">
            GeoFriendly
          </Typography>
          <Typography className={classes.subheading} variant="subheading">
            Please complete to create your account.
          </Typography>

          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.nameGroup}>
              <TextField
                label="First name"
                margin="normal"
                className={classes.textfield}
              />
              <TextField
                label="Last name"
                margin="normal"
                className={classes.textfield}
              />
            </div>

            <TextField
              label="Username"
              margin="normal"
              className={classes.textfield}
            />
            <TextField
              label="Email"
              margin="normal"
              className={classes.textfield}
            />
            <TextField
              label="Password"
              className={classes.textfield}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              label="Confirm Password"
              className={classes.textfield}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />

            <FormGroup row style={{marginTop: '1rem'}}>
              <FormControlLabel className="FormControlLabel"
                control={
                  <Checkbox
                    // checked={this.state.checkedB}
                    // onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="I agree with terms and conditions"
              />
            </FormGroup>

            <div className={classes.buttonGroup}>
              <Button 
                variant="contained" 
                color="inherit" 
                style={{backgroundColor: '#43425D', color: '#fff', width: '100%'}}
              >
                Submit
              </Button>
            </div>
            
            <Link to='/signin'>
                <Typography variant='body1'>
                  Already have an account? Sign in.
                </Typography>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;