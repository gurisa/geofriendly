import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import classes from './NotFound.css';
import classes2 from '../Container.css';

const notFound = () => {
  const notFoundClasses = [classes2.center, classes.notFound];

  return (
    <div style={{ minHeight: 'calc(100vh - 9.55rem)' }}>
      <div className={notFoundClasses.join(' ')}>
        <div className={classes2.container}>
          <Typography variant="display2">404 Page Not Found</Typography>
          <br />
          <Typography>Sorry, that page does not exist</Typography>
          <br />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default notFound;
