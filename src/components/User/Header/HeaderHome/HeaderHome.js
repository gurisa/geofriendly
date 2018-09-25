import React from 'react';
import Typography from '@material-ui/core/Typography';

import classes from './HeaderHome.css';

const background = props => (
  <div 
    className={classes.headerHome} 
    style={{
      backgroundImage: 'linear-gradient(to right, rgba(69, 112, 255, 0.25), rgba(255, 68, 0, 0.25)), ' +
      'url(https://images3.alphacoders.com/208/208377.jpg)'
    }}
  >
    <div className={classes.headerBox}>
      <Typography 
        variant={props.width < 600 ? 'display1' : 'display2'} 
        color="inherit"
      >
        Let's go to Museum...
      </Typography>
    </div>
  </div>
);

export default background;