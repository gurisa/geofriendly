import React from 'react';
import Search from '@material-ui/icons/Search';

import classes from './Search.css';

const search = () => (
  <div className={classes.search}>
    <input 
      type="text" 
      placeholder="Search for Collections" 
      className={classes.input}/>
    <button className={classes.button}>
      <Search />
    </button>
  </div>
);

export default search;