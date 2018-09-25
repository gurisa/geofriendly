import React from 'react';

import Collections from '../../../components/User/Collections/Collections';
import HeaderCollection from '../../../components/User/Header/HeaderCollection/HeaderCollection';

import classes from '../Container.css';

const collection = props => {
  const category = props.match.path.slice(12);

  return (
    <div style={{minHeight: 'calc(100vh - 9.55rem)'}}>
      <HeaderCollection category={category} width={props.width} />
      <div className={classes.center}>
        <div className={classes.container}>
          <Collections width={props.width} />
        </div>
      </div>
    </div>
  )
};

export default collection;