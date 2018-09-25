import React from 'react';

import classes from './NavItem.css';
import Search from './Search/Search';
import NavLinks from './NavLinks/NavLinks';

const navItem = props => (
  <div className={classes.navItem}>
    <Search />
    <NavLinks link={props.link} />
  </div>
);

export default navItem;