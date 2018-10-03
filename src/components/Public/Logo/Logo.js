import React from 'react';
import Typography from '@material-ui/core/Typography';

import classes from './Logo.css';

const logo = () => (
  <Typography variant="title" className={classes.logo}>
    Museum Geologi
  </Typography>
);

export default logo;