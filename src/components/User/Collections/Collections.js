import React from 'react';
import Grid from '@material-ui/core/Grid';

import Collection from './Collection/Collection';

const cards = props => {
  let collection = [];

  for (let i = 0; i < 10; i++) {
    collection.push(<Collection key={i} width={props.width} />)
  }

  return (
    <Grid container style={{overflow: 'hidden'}}>
      {collection}
    </Grid>
  )
};

export default cards;