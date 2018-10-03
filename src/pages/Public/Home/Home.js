import React from 'react';

import HeaderHome from '../../../components/Public/Header/HeaderHome/HeaderHome';
import Categorys from '../../../components/Public/Categorys/Categorys';

import classes from '../Container.css';

const home = props => (
  <div style={{minHeight: 'calc(100vh - 9.55rem)'}}>
    <HeaderHome width={props.width}  />
    <div className={classes.center}>
      <div className={classes.container}>
        <Categorys 
          width={props.width} 
          category={props.category} />
      </div>
    </div>
  </div>
);

export default home;