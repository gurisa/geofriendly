import React from 'react';

import classes from './Backdrop.css';
import Div from '../../../hoc/Div/Div';

const backdrop = props => {
  let backdrop = null;

  if (props.show) {
    backdrop = <div className={classes.backdrop} onClick={props.clicked} />;
  }

  return ( 
    <Div>
      {backdrop}
    </Div>
  );
};

export default backdrop;