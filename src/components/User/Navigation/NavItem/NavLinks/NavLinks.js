import React from 'react';

import classes from './NavLinks.css';
import NavLink from './NavLink/NavLink';

const navLinks = props => {
  let navLink = props.link.map(data => (
    <NavLink 
      key={data.name} 
      path={data.path} 
      name={data.name} 
      submenu={data.submenu}
      clicked={props.clicked} />
  ));

  return (
    <div className={classes.navLinks}>
      {navLink}
    </div>
  )
};

export default navLinks;