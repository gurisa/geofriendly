import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import classes from './Collection.css';
import Div from '../../../../hoc/Div/Div';

const collection = props => {
  const { width, category } = props;

  let gridClassses = [classes.collection];

  let grid = (
    <Grid item md={3} sm={6} xs={12} className={gridClassses.join(' ')}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          image="https://res.cloudinary.com/dk0z4ums3/image/upload/v1487322510/attached_image/makanan-kolesterol-tinggi-alodokter.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
  if (category) {
    grid = (
      <Card className={classes.cardCategory}>
        <CardMedia
          className={classes.image}
          image="https://res.cloudinary.com/dk0z4ums3/image/upload/v1487322510/attached_image/makanan-kolesterol-tinggi-alodokter.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (width >= 1280) {
    gridClassses = [classes.collection, classes.grid];
    
    grid = (
      <Grid item className={gridClassses.join(' ')}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.image}
            image="https://res.cloudinary.com/dk0z4ums3/image/upload/v1487322510/attached_image/makanan-kolesterol-tinggi-alodokter.jpg"
            title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="headline">
              Lizard
            </Typography>
            <Typography>
              Lizards are a widespread group of squamate reptiles
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  } else if (width < 600) {
    gridClassses = [classes.collection, classes.grid];
    
    grid = (
      <Grid item xs={12} className={gridClassses.join(' ')}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.image}
            image="https://res.cloudinary.com/dk0z4ums3/image/upload/v1487322510/attached_image/makanan-kolesterol-tinggi-alodokter.jpg"
            title="Contemplative Reptile" />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="headline">
              Lizard
            </Typography>
            <Typography>
              Lizards are a widespread group of squamate reptiles
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <Div>{grid}</Div>
  );
}

export default collection;