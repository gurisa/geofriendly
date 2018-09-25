import React from 'react';
import Typography from '@material-ui/core/Typography';

import classes from './Footer.css';
import Logo from '../Logo/Logo';

const footer = props => (
  <footer className={classes.footer}>
    <div className={classes.footerItem}>
      <Logo />
      <Typography variant={props.width <= 600 ? 'caption' : 'body1'} >
        Copyright &copy; 2018 Museum Geologi
      </Typography>
    </div>
  </footer>
);

export default footer;