import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import classes from './Category.css';
import Collection from '../../Collections/Collection/Collection';

const category = props => {
  const { width, name, path } = props;

  let collection = [];
  let display = 'block';

  for (let i = 0; i < 10; i++) {
    collection.push(<Collection key={i} width={width} category="true" />);
  }

  let slideWidth;

  switch (true) {
    case (width < 400):
      display = 'none';
      slideWidth = .75;
      break;
    case (width < 600):
      display = 'none';
      slideWidth = .75;
      break;
    case (width < 960):
      display = 'none';
      slideWidth = 0.4;
      break;
    case (width < 1280):
      slideWidth = 0.25;
      break;
    default:
      slideWidth = 0.2;
  }

  return (
    <div className={classes.category}>
      <div className={classes.heading}>
        <Typography variant={width < 600 ? "subheading" : 'title'}>
          {name}
        </Typography>
        <Link to={path} className={classes.link}>
          <Button 
            style={{
              textTransform: 'capitalize', 
              fontWeight: `${width < 600 ? '400' : ''}`
            }}
          >
            See More
          </Button>
        </Link>
      </div>
      <Carousel 
        slideWidth={slideWidth} 
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <Button 
            variant="fab" 
            aria-label="Prev" 
            onClick={previousSlide}
            style={{backgroundColor: '#fff', display: `${display}`}}
          >
            <NavigateBefore className={classes.navigate} />
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button 
            variant="fab" 
            aria-label="Next" 
            onClick={nextSlide}
            style={{backgroundColor: '#fff', display: `${display}`}}
          >
            <NavigateNext className={classes.navigate} />
          </Button>
        )}
        renderBottomCenterControls={null}
      >
        {collection}
      </Carousel>
    </div>
  );
};

export default category;